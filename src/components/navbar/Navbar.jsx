import styled from 'styled-components';
import bgImage from '../../assets/bg-image.png';

const Section = styled.section`
  background-image: url(${bgImage});
  height: 787px;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;`;

const Content = styled.div`
  width: 100%;
  height: 100px;`;
const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px
`;
const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;
const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
`;
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);`;

const Navbar = () => {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        Get 2 free
                    </Title>
                    <Desc>
                        Open and fund a developer to build a good web application with under 1000$
                        and also have a chance to get 15% discount on <span>React,Vue</span>{' '}
                        and more!
                        <Button href={"https://github.com/Deepak1jha"} target="_blank">
                            <span>Claim your discount now</span>
                        </Button>
                    </Desc>
                </Left>
            </Content>
        </Section>
    )
}

export default Navbar;