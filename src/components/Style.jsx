import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 85px;
    .logo{
        font-size: 20px;
        font-weight: 600;
    }
    nav{
        ul{
            list-style: none;
            display: flex;
            align-items: center;
            gap: 20px;
            li{
                cursor: pointer;
                font-size: 18px;
                transition: 0.3s all ease;
                &:hover{
                    color: red;
                }
            }
        }
    }
    button{
        border: 0px;
        background: red;
        color: white;
        cursor: pointer;
        padding: 10px 20px;
        border-radius: 6px;
        font-size: 14px;
        transition: 0.3s all ease;
        &:hover{
            transform: translateY(-1px);
            box-shadow: 2px 2px 10px #ff000070;
        }
    }
`;
export const HeroWrapper = styled.div`
    width: 1120px;
    margin: 0px auto;
`;
export const  HeroInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0px;
    gap: 20px;
`;
export const Column = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    p{
        color: #000000;
        font-weight: 800;
        font-size: 90px;
    }
    span{
        color: #5A5959;
        font-size: 16px;
        font-weight: 600;
    }
    .btm_section{
        display: flex;
        flex-direction: column;
        gap: 16px;
        p{
            font-size: 16px;
            color: #5A5959;
        }
        .icon_bx{
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }
`;
export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    button{
        border: 0px;
        background: red;
        color: white;
        padding: 6px 16px;
        font-size: 16px;
        cursor: pointer;
        border: 1px solid transparent;
        transition: 0.3s all ease;
        &:hover{
            background: transparent;
            border: 1px solid red;
            color: red;
        }
        &.category{
            background: transparent;
            border: 1px solid #000000;
            color: #000000;
            &:hover{
                background: #000000;
                color: #ffffff;
            }
        }
    }
`;