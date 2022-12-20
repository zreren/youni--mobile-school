import React, { useState } from 'react';
import CommonLayout from '@/components/Layout/CommonLayout';
import Header from '@/components/Header';
import HeaderMenu from '@/components/Menu/Header-menu';
import Link from 'next/link';
import ProfileHeader from '@/components/PageComponents/Profile/ProfileHeader';
import Icon1 from './1.svg';
import Icon1Select from './1-select.svg';
import Icon2 from './2.svg';
import Icon2Select from './2-select.svg';
import Icon3Select from './3-select.svg';
import Icon3 from './3.svg';
import Icon4 from './4.svg';
import MenuIcon1 from './menu/menu1.svg';
import MenuIcon2 from './menu/menu2.svg';
import MenuIcon3 from './menu/menu3.svg';
import MenuIcon4 from './menu/menu4.svg';
import SettingIcon1 from './setting/setting@2x.svg';
import SettingIcon2 from './setting/setting@2x-1.svg';
import SettingIcon3 from './setting/setting@2x-2.svg';
import SettingIcon4 from './setting/setting@2x-3.svg';
import SettingIcon5 from './setting/setting@2x-4.svg';
import SettingIcon6 from './setting/setting@2x-5.svg';
import SettingIcon7 from './setting/setting@2x-6.svg';
import SettingIcon8 from './setting/setting@2x-7.svg';
import BgSVG from './bg.svg';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { withTranslation } from 'next-i18next';
import Waterfall from '@/components/Layout/Waterfall';

// const routerHook = (path:string) =>{
//   const router = useRouter();
//   router.push(path)
// }
const Identify = () => {
  const router = useRouter();
  const { t } = useTranslation('translations');
  return (
    <div
      onClick={() => {
        router.push('./Profile/valid');
      }}
      className="relative flex items-center justify-between w-full h-16 p-4 pt-0 pb-0 youni-vip rounded-xl text-gold"
    >
      <div className="flex items-center space-x-2">
        <Icon4></Icon4>
        {/* <div>{t("profile.identify.student.certification")}</div> */}
        <div className="text-brown">学生认证</div>
      </div>
      <div className="text-xs text-brown">
        <div>30秒认证在校生身份</div> <div>解锁YoUni全部功能</div>
      </div>
      <BgSVG className="absolute h-10 scale-125 w-18 -right-0"></BgSVG>
    </div>
  );
};
const ProfileMenu = () => {
  return (
    <div className="flex justify-between p-4 ">
      <div className="flex flex-col items-center space-y-3">
        <MenuIcon1></MenuIcon1>
        <div className="text-xs">每日签到</div>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <MenuIcon2></MenuIcon2>
        <div className="text-xs">每日签到</div>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <MenuIcon3></MenuIcon3>
        <div className="text-xs">每日签到</div>
      </div>
    </div>
  );
};
const Setting = () => {
  return (
    <div className="w-full rounded-lg card bg-base-100 ">
      <div className="p-4 pl-0 pr-0 card-body ">
        <div className="grid grid-cols-4 ">
          <div className="flex flex-col items-center space-y-3">
            <SettingIcon1></SettingIcon1>
            <Link href="/Setting/account">
              <div className="text-xs">账号</div>
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <SettingIcon2></SettingIcon2>
            <Link href="/Setting/language">
              <div className="text-xs">语言</div>
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <SettingIcon3></SettingIcon3>
            <div className="text-xs">客服</div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <SettingIcon4></SettingIcon4>
            <Link href="/Setting">
              <div className="text-xs">设置</div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex flex-col items-center space-y-3">
            <SettingIcon5></SettingIcon5>
            <div className="text-xs">草稿箱</div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <SettingIcon6></SettingIcon6>
            <div className="text-xs">历史</div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <SettingIcon7></SettingIcon7>
            <div className="text-xs">邀请好友</div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <SettingIcon8></SettingIcon8>
            <div className="text-xs">功能请求</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Profile1 = () => {
  return (
    <div className="w-full h-[calc(100vh-320px)] p-5 bg-bg">
      <Identify></Identify>
      <ProfileMenu></ProfileMenu>
      <Setting></Setting>
      <div className="text-center">
        <Link href="/Login/signup"> 临时进入登录页面</Link>
      </div>
    </div>
  );
};
const Profile2 = () => {
  return (
    <div className='h-full'>
      <Waterfall></Waterfall>
    </div>
  );
};
const Profile3 = () => {
  return (
    <div>
      <Waterfall></Waterfall>
    </div>
  );
};
function index(props) {
  console.log(props, 'porps');
  const { i18n } = useTranslation('common');
  console.log(i18n, 'i18n');
  const [menuVal, setMenu] = useState(0);
  const headerList = [
    {
      icon: menuVal === 0?<Icon1Select></Icon1Select>:<Icon1></Icon1>,
      menu: <Profile1></Profile1>,
    },
    {
      icon:  menuVal === 1?<Icon2Select></Icon2Select>:<Icon2></Icon2>,
      menu: <Profile2></Profile2>,
    },
    {
      icon: menuVal === 2?<Icon3Select></Icon3Select>:<Icon3></Icon3>,
      menu: <Profile3></Profile3>,
    },
  ];
  return (
    <div className="w-screen h-screen">
      <ProfileHeader></ProfileHeader>
      <div className="w-full overflow-hidden rounded-full ">
        <HeaderMenu
          headerMenuList={headerList}
          switchMenu={(val) => {
            setMenu(val);
          }}
        ></HeaderMenu>
      </div>
      <div className='overflow-scroll'>{headerList[menuVal].menu}</div>
    </div>
  );
}
// export default withTranslation('common')(Identify)
export default index;
