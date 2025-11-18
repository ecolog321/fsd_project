import Flex, { FlexProps } from "../Flex/Flex";


type VStackProps = Omit<FlexProps, 'direction'>

const VStack = (props: VStackProps) => {
  const {align = 'start'} = props;
  return (
      <Flex align={align} direction="column" {...props}/>
  );
};

export default VStack;