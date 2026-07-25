export default function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 justify-center border border-gray-200 p-4 w-56 bg-[#EEEEEE]">
        <div className="w-2 h-2 rounded-full bg-[#587FFF]" />
        <p className="text-sm font-semibold text-black">
            {text}
        </p>
    </div>
  );
}