import nettTref_1 from '../../../../../../images/mobileSize/nettTreff_1.png';
import nettTref_2 from '../../../../../../images/mobileSize/nettTreff_2.png';

export default function RenderStepImages({ currentStepIndex, stepsCount }) {
  return (
    <div>
      {Array(stepsCount)
        .fill('')
        .map((_, i) => (
          <img
            key={i + nettTref_1}
            src={i <= currentStepIndex ? nettTref_1 : nettTref_2}
            alt="nettTref"
          />
        ))}
    </div>
  );
}
