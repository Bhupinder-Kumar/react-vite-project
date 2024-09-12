import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
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
            box-shadow: 2px 2px 10px #ff000070;
        }
    }
`