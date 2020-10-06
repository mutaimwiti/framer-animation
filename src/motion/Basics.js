import React from "react";
import {motion, useMotionValue, useTransform} from "framer-motion";
import styled from "styled-components";

const StyledScenarioList = styled.div`
    overflow-y: scroll;
`;

const ScenarioWrapper = styled.div`
    padding: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #eee;
`;

const Scenario1 = () => {
    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: .5},
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            Foo
        </motion.div>
    );
};

const Scenario2 = () => {
    return (
        <motion.div animate={{scale: 0.5}}>
            <h1>I'm scaled</h1>
        </motion.div>
    );
}

const Scenario3 = () => {
    return (
        <motion.div
            drag="x"
            dragConstraints={{left: -100, right: 100}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.7}}
        >
            Drag me on the x-axis, hover me, tap me
        </motion.div>
    )
};

const Scenario4 = () => {
    const x = useMotionValue(0)
    const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

    return (
        <motion.div drag="x" style={{x, opacity}}>
            Hooks to transform
        </motion.div>
    )
};

const Scenario5 = () => {
    return (
        <motion.div
            animate={{rotate: 360}}
            transition={{duration: 2}}
        >
            How do you like my rotation?
        </motion.div>
    )
};

const Basics = () => {
    return (
        <StyledScenarioList>
            Scenario 1: <ScenarioWrapper><Scenario1/></ScenarioWrapper>
            Scenario 2: <ScenarioWrapper><Scenario2/></ScenarioWrapper>
            Scenario 3: <ScenarioWrapper><Scenario3/></ScenarioWrapper>
            Scenario 4: <ScenarioWrapper><Scenario4/></ScenarioWrapper>
            Scenario 5: <ScenarioWrapper><Scenario5/></ScenarioWrapper>
        </StyledScenarioList>
    )
};

export default Basics;
