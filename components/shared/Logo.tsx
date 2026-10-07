import Image from "next/image";
import Link from "next/link";

type LogoProps = {
    light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
    return (
        <Link
            href="/"
            aria-label="ENOKSİS Ana Sayfa"
            className="inline-flex shrink-0 items-center"
        >
            <Image
                src="/images/platform/Enoksis_Renkli.png"
                alt="ENOKSİS"
                width={180}
                height={52}
                className="h-auto w-[145px] sm:w-[165px]"
                priority
            />
        </Link>
    );
}