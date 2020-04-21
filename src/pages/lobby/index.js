import React, { useState, useEffect } from 'react'
import { DivAlignContent, ButtonStyled, DivGrass, DivFlower, DivBodyFlower, DivGround } from './styles';

export default function LobbyPage() {

    const [nickName, setNickName] = useState('');
    const [howManyClouds, setHowManyClouds] = useState([]);

    useEffect(() => {
        // let newCloudsArr = [];
        // for (let i = 0; i < Math.random() * 50; i++) {
        //     newCloudsArr.push(i);
        // }
        // setHowManyClouds(howManyClouds.concat(newCloudsArr));
        setHowManyClouds([1, 2]);

    }, [])

    return (
        <DivAlignContent>
            {
                howManyClouds.map((el, i) => (
                    <DivGrass 
                        // width={Math.random() * (300 + el) + 'px'}
                        // top={Math.random() * (100 + el) + '%'}
                        // left={Math.random() * (100 + el) + '%'}
                        isFirst={i === 0 ? true : false}
                        width="500px"
                        bottom={0}
                        left={el === 1 ? 0 : '150px'}
                    />
                ))
            }
            <DivGround/>
            <DivFlower>
                STOP
            </DivFlower>
            <DivBodyFlower/>
            <h2>Your Nickname</h2>
            <input 
                type="text" 
                name="nickName" 
                value={nickName} 
                onChange={(e) => setNickName(e.target.value)} 
            />
            <ButtonStyled>Start Race!</ButtonStyled>
        </DivAlignContent>
    )
}
