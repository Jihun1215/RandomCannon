import {useState } from "react"

import styled from "styled-components"

import { useRecoilState } from "recoil";
import { SettingModalCheck, DuplicatesForCheck, NumberSetting } from "state/atoms";

export const SettingModal = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputNumCheck, setInputNumCheck] = useState(true);


  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(e.target.checked);
  };

  const [modalOpen, setModalOpen] = useRecoilState(SettingModalCheck);
  const [, setNumber] = useRecoilState(NumberSetting);
  const [, setCheckinput] = useRecoilState(DuplicatesForCheck);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d*$/g.test(value) || value === '') {
        setInputValue(value);
        setInputNumCheck(true)
    }else{
      setInputNumCheck(false)
    }
    
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNumber(inputValue)
    setCheckinput(isCheckboxChecked)
    setModalOpen(false)
  };



  return (
    
      modalOpen && <ModalBg>
      <Modal onSubmit={handleSubmit}>
        <Area>
          <h2>설정</h2>
        </Area>
        <Area>

          <div>
            <p>최대숫자 설정</p>
          </div>

          <div>
            <NumberInput 
               type="text" 
               value={inputValue}
               onChange={handleInputChange}
               maxLength={5}
               placeholder="2-1000 사이로만 입력"
               required/>
               {
                !inputNumCheck && <span>숫자만 입력하셈</span>
               }
          </div>
      
        </Area>

        <Area>
          <div>
            <p>중복번호 적용</p>
          </div>

          <div>
            <InputCheckBox 
                type="checkbox"
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
                />
          </div>
        </Area>

        <Area>
          <div></div>
          <div>
          <Button type="submit">바로 기</Button>
          </div>
        </Area>

        </Modal>
      </ModalBg>
  )
}

const ModalBg = styled.div`
  ${({theme}) => theme.BoxCenter};
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1px);

`

const Modal = styled.form`
    position: fixed;
    z-index: 1000;
    width: 500px;
    height: 250px;
    background-color: ${({theme}) => theme.bgColor};;
    border-radius: 4px;
    ${({theme}) => theme.FlexCol};
    align-items: center;
`;

const Area = styled.div`
  width: 100%;
  height: 25%;
  ${({theme}) => theme.FlexRow};
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  p {
    font-size: 20px;
  }
  div {
    position: relative;
    span{
      position: absolute;
      width: 120px;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      color: ${({theme}) => theme.colors.red};;
      font-weight: 600;
    }
  }
`;

const NumberInput = styled.input`
    width: auto;
    height: 100%;
    padding: 5px;
    border: 2px  solid gray;
    border-radius: 5px;
    &:focus {
    border: 2px solid ${({ theme }) => theme.colors.lightblue};
  }
`;


const InputCheckBox = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid gray;
  border-radius: 100%;
	cursor: pointer;
    transition: .2s;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  background-color: ${({theme}) => theme.colors.lightblue};
  border-radius: 8px;
  &:hover {
        border: 1px black solid;
    }
    &:active {
        background-color: ${({theme}) => theme.colors.gray3};
    }
`