import { Column, Flex, HeroInnerWrapper, HeroWrapper } from "./Style";


const Hero = () => {
    return (
        <HeroWrapper>
            <HeroInnerWrapper>
                <Column>
                    <p>YOUR FEET <br /> DESERVE <br /> THE BEST</p>
                    <span>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</span>
                    <Flex>
                        <button>Shop Now</button>
                        <button className="category">Category</button>
                    </Flex>
                    <div className="btm_section">
                        <p>Also Available On</p>
                        <div className="icon_bx">
                            <img src="https://res.cloudinary.com/diq1rd6ve/image/upload/v1726157764/w8m9qipw8ukbmslfsrpb.png" />
                            <img src="https://res.cloudinary.com/diq1rd6ve/image/upload/v1726157764/ssgfonlemdndj9iwabw7.png" />

                        </div>
                    </div>
                </Column>
                <Column>
                    <img src="https://res.cloudinary.com/diq1rd6ve/image/upload/v1726157148/aee25lmiavvzlifgh82t.png" />
                </Column>
            </HeroInnerWrapper>
        </HeroWrapper>
    )
}

export default Hero;    