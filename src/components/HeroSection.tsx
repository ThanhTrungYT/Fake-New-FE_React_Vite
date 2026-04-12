import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, AlertTriangle } from "lucide-react";
import { predictNews } from "@/lib/api";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const isFake = result?.toLowerCase().includes("fake");

  const handleAnalyze = async () => {
    if (!query.trim()) return;

    setAnalyzing(true);
    setShowResult(false);
    setError("");

    try {
      const isUrl = query.startsWith("http");

      const data = await predictNews(
        isUrl ? { url: query } : { text: query }
      );

      setResult(data.prediction);
      setConfidence(data.confidence);
      setShowResult(true);
    } catch (err: any) {
      setError(err.message || "Có lỗi xảy ra");
    } finally {
      setAnalyzing(false);
    }
  };

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#demo") {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 400);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);

    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 section-padding overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsla(210,70%,42%,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground mb-6">
            Phát hiện tin giả{" "}
            <span className="gradient-text">chỉ trong vài giây</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Công cụ AI giúp bạn kiểm chứng thông tin nhanh chóng, chính xác và minh bạch trước khi chia sẻ
          </p>

          <div className="flex justify-center">
            <a
              href="#demo"
              className="gradient-bg text-primary-foreground px-7 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              Kiểm tra ngay
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div
          id="demo"
          className="max-w-2xl mx-auto glass-card p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResult(false);
                }}
                placeholder="Dán link hoặc nội dung cần kiểm tra..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={analyzing}
              className="gradient-bg text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm disabled:opacity-70"
            >
              {analyzing ? "Đang phân tích..." : "Phân tích"}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-3 p-4 rounded-xl ${
                isFake
                  ? "bg-destructive/5 border border-destructive/15"
                  : "bg-green-500/5 border border-green-500/20"
              }`}
            >
              <AlertTriangle
                className={`w-5 h-5 mt-0.5 ${
                  isFake ? "text-destructive" : "text-green-500"
                }`}
              />

              <div>
                <p className="font-semibold text-sm">
                  Kết quả:{" "}
                  <span className={isFake ? "text-destructive" : "text-green-500"}>
                    {result}
                  </span>
                </p>

                <p className="text-sm mt-1 text-muted-foreground">
                  Độ tin cậy:{" "}
                  <span className="font-semibold">
                    {confidence?.toFixed(2)}%
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;