import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goddess of Justice Fund: Social Fairness | FAIR3",
  description:
    "The Goddess of Justice Fund by FAIR3 stands as a voice for the voiceless, championing education equity and cultural diversity. Raise your voice with us to drive impactful social fairness initiatives today!",
  keywords: [
    "goddess of justice fund",
    "FAIR3",
    "voice for justice",
    "education equity advocacy",
    "cultural diversity champion",
    "social fairness movement",
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
