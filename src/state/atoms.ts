import { atom } from "recoil";

// 세팅 모달 여부
export const SettingModalCheck = atom<boolean>({
    key: "SettingModalCheck",
    default: true,
});
  
// 숫자 
export const NumberSetting = atom<string>({
    key: "NumberSetting",
    default: "0",
});
  
// 숫자 중복 여부 체크
export const DuplicatesForCheck = atom<boolean>({
    key: "DuplicatesForCheck",
    default: true,
});
  

// 숫자 중복 여부 체크
export const NumberArr = atom<number[]>({
    key: "NumberArr",
    default: [],
});
  