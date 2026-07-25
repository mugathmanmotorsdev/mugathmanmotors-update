import Ceo from "./Ceo";
import SectionLabel from "./SectionLabel";
import HeadTeam from "./HeadTeam";

export default function Team() {
    return (
        <section className="px-6 md:px-12 py-16">
            <div className="flex flex-col gap-2 max-w-xl">
                <SectionLabel text="Meet Our Team" />
                <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                  Introduction People Behind Mugathman
                </h2>
            </div>

            {/* CEO section */}
            <Ceo />

            {/* Leadership Team section */}
            <HeadTeam />
        </section>
    )
}