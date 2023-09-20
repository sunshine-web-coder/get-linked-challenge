import Banner from "../../components/banner/Banner";
import FrequentlyAskQuestion from "./sections/FrequentlyAskQuestion";
import IntroductionToGetlinked from "./sections/IntroductionToGetlinked";
import JudgingCriteriaKeyAttributes from "./sections/JudgingCriteriaKeyAttributes";
import PartnersAndSponsors from "./sections/PartnersAndSponsors";
import PrivacyPolicyAndTerms from "./sections/PrivacyPolicyAndTerms";
import PrizesAndRewards from "./sections/PrizesAndRewards";
import RulesAndGuidelines from "./sections/RulesAndGuidelines";
import Timeline from "./sections/Timeline";

export default function Home() {
  return (
    <div>
      <Banner />
      <IntroductionToGetlinked />
      <RulesAndGuidelines />
      <JudgingCriteriaKeyAttributes />
      <FrequentlyAskQuestion />
      <Timeline />
      <PrizesAndRewards />
      <PartnersAndSponsors />
      <PrivacyPolicyAndTerms />
    </div>
  );
}
