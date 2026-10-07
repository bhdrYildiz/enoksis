"use client";

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="tr">
            <body>
                <main
                    style={{
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                        fontFamily: "Arial, sans-serif",
                        background: "#FFFFFF",
                        color: "#101828",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "620px",
                        }}
                    >
                        <div
                            style={{
                                width: "32px",
                                height: "2px",
                                background: "#FF9D00",
                                marginBottom: "24px",
                            }}
                        />

                        <h1
                            style={{
                                margin: 0,
                                fontSize: "clamp(36px, 6vw, 56px)",
                                lineHeight: 1.05,
                                letterSpacing: "-0.05em",
                            }}
                        >
                            Beklenmeyen bir
                            <br />
                            hata oluştu.
                        </h1>

                        <p
                            style={{
                                margin: "20px 0 0",
                                maxWidth: "500px",
                                color: "#667085",
                                fontSize: "15px",
                                lineHeight: 1.7,
                            }}
                        >
                            ENOKSİS&apos;i görüntülerken beklenmeyen bir sorun
                            oluştu. Sayfayı yeniden yüklemeyi deneyebilirsiniz.
                        </p>

                        <button
                            type="button"
                            onClick={reset}
                            style={{
                                marginTop: "28px",
                                height: "44px",
                                padding: "0 24px",
                                border: 0,
                                borderRadius: "999px",
                                background: "#101828",
                                color: "#FFFFFF",
                                fontWeight: 700,
                                cursor: "pointer",
                            }}
                        >
                            Tekrar dene
                        </button>
                    </div>
                </main>
            </body>
        </html>
    );
}