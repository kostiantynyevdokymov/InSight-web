import { Section, Container, List, Title, Item, Text } from './SideBarComponents';

export const SideBar = () => {
  return (
    <Section>
      <Container>
        <List>
          <Title>Summary for 20/06/2020</Title>
          <Item>
            <Text>Left</Text>
            <Text>000 kcal</Text>
          </Item>
          <Item>
            <Text>Consumed</Text>
            <Text>000 kcal</Text>
          </Item>
          <Item>
            <Text>Daily rate</Text>
            <Text>000 kcal</Text>
          </Item>
          <Item>
            <Text>n% of normal</Text>
            <Text>000 kcal</Text>
          </Item>
        </List>
        <List>
          <Title>Food not recommended</Title>
          <Item style={{ display: 'block' }}>
            <Text>Your diet will be displayed here</Text>
          </Item>
        </List>
      </Container>
    </Section>
  );
};
