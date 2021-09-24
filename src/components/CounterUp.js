import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CounterUp({ count }) {
  return (
    <>
      <CountUp end={count} duration={1.5} suffix=" +" redraw={true}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef}>count</span>
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
}

export default CounterUp;
