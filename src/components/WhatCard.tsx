import { Heading } from ".";

interface Props {
  head: string;
}
function WhatCard({ head }: Props) {
  return (
    <div>
      <Heading>{head}</Heading>
    </div>
  );
}

export default WhatCard;
