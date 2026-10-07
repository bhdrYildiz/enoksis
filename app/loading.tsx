export default function Loading() {
    return (
        <main
            className="mx-auto min-h-[65vh] max-w-[1180px] px-5 py-16 sm:px-6 lg:px-8"
            aria-label="Sayfa yükleniyor"
            aria-busy="true"
        >
            <div className="max-w-[720px]">
                <div className="h-3 w-28 animate-pulse rounded-full bg-[#EAECF0]" />

                <div className="mt-7 h-12 w-full max-w-[560px] animate-pulse rounded-xl bg-[#F2F4F7]" />

                <div className="mt-3 h-12 w-[70%] animate-pulse rounded-xl bg-[#F2F4F7]" />

                <div className="mt-7 h-4 w-full max-w-[500px] animate-pulse rounded-full bg-[#F2F4F7]" />

                <div className="mt-3 h-4 w-full max-w-[390px] animate-pulse rounded-full bg-[#F2F4F7]" />
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="h-[160px] animate-pulse rounded-[20px] border border-[#EAECF0] bg-[#F9FAFB]"
                    />
                ))}
            </div>
        </main>
    );
}