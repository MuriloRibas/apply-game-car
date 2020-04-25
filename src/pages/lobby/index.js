import React, { useState, useEffect } from 'react'
import { DivAlignContent, DivGrass, DivFlower, DivBodyFlower, DivGround, DivCloud } from './styles';
import { ButtonStyled } from '../../components/BtnStyled';
import {Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function LobbyPage(props) {

    const [redirect, setRedirect] = useState(false)
    const [nickName, setNickName] = useState('');
    const [howManyGrass, setHowManyGrass] = useState([]);

    const goToPlayPage = () => setRedirect(true)
    
    useEffect(() => {
        if (redirect){
            return props.history.push('/play')
        } 
    }, [redirect])

    useEffect(() => {
        setHowManyGrass([1, 2, 3]);
    }, [])

    return (
        <DivAlignContent>
            {
                howManyGrass.map((el, i) => (
                    <DivGrass 
                        // width={Math.random() * (300 + el) + 'px'}
                        // top={Math.random() * (100 + el) + '%'}
                        // left={Math.random() * (100 + el) + '%'}
                        isLast={i === howManyGrass.length - 1 ? 0 : 'none'}
                        isFirst={i === 0 ? true : false}
                        width="500px"
                        bottom={0}
                        left={el === 1 ? 0 : '150px'}
                    />
                ))
            }
            <DivCloud
                width="200px"
                top="10%"
                left="20%"
            />
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
            <ButtonStyled
                onClick={() => goToPlayPage()}
            >Start Race!</ButtonStyled>
        </DivAlignContent>
    )
}

export default withRouter(LobbyPage)