import React from 'react';
import RightIcon from './right.svg';
import Subtract from './Subtract.svg';
import Button from './Button.svg';
import Image from 'next/image';
import Link from 'next/link';
import LikeActive from './LikeActive.svg';
import Like from './Like.svg';
import Dislike from './dislike.svg';
import useLanguage from '@/hooks/useLanguage';

export default function ProfileHeader(props) {
  const UserData = (props) => {
    const {data} = props;
    // if(!data?.extraInfo) return 
    return (
      <div className="flex items-center justify-between p-4 pb-2">
        <div className="flex items-center space-x-2 ">
          <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-blueTitle">{data?.extraInfo?.following || 0}</div>
            <div className="text-xs text-gray-400">关注</div>
          </div>
          <div>
            <svg
              width="2"
              height="15"
              viewBox="0 0 2 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.1"
                x="0.125"
                y="0.5"
                width="1"
                height="14"
                fill="#37455C"
                fill-opacity="0.85"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-blueTitle">{data?.extraInfo?.followers || 0}</div>
            <div className="text-xs text-gray-400">粉丝</div>
          </div>
          <div>
            <svg
              width="2"
              height="15"
              viewBox="0 0 2 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.1"
                x="0.125"
                y="0.5"
                width="1"
                height="14"
                fill="#37455C"
                fill-opacity="0.85"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-blueTitle">{data?.extraInfo?.likeAndStar || 0}</div>
            <div className="text-xs text-gray-400">赞&收藏</div>
          </div>
        </div>
        { myProfile === false ? null :<Link href="/Setting/profile"><Button></Button></Link>}
      </div>
    );
  };
  const {data,myProfile} = props;
  return (
    <div className="w-full h-auto pt-10 pb-8 bg-gradient-to-tr from-red-50 via-yellow-50 to-red-100">
      <div className="flex h-20 p-4">
        <div className="avatar placeholder">
          <div className="w-20 h-20 bg-white rounded-full text-neutral-content">
            {data?.student?.avatar? <Image placeholder='blur' objectFit='cover' blurDataURL={`${Cons.BASEURL}${data?.student?.avatar}`}
             width={'80px'} height={'80px'}  src={`${Cons.BASEURL}${data?.student?.avatar}`} />
              :<span className="text-3xl"></span>
            }
          </div>
        </div>
        <div className="flex items-center justify-between w-full h-full ml-5">
          <div className="flex flex-col justify-between w-full h-full pt-2">
            <div className="text-lg font-500">{data?.student?.nickName?data?.student?.nickName:"username"}</div>
            <div className="text-xs text-[#798195] font-400">
              {data?.student?.campus[useLanguage('name')]?data?.student?.campus[useLanguage('name')]:""}
            </div>
            <div className="text-[10px] text-[#798195] font-400 mb-1">
               {myProfile === false? data?.student?.id?`YoID:${data?.student.id}`:"" :null}
             {/* {'约克大学 (加拿大)'} */}
            </div>
            <div className="flex flex-shrink space-x-2 text-xs rounded-full font-500">
              {data?.student?.education?(
               <>
                 <div className="flex items-center p-1 space-x-1 bg-white rounded-full px-2">
                <Subtract></Subtract>
                <div className="text-xs text-blueTitle font-medium ">学生认证</div>
              </div>
              <div className="flex items-center p-1 pl-2 pr-2 space-x-1 bg-white rounded-full">
                <div className='font-medium px-1'>用户</div>
              </div>
                </>
              ):null}
              
            </div>
          </div>
          <div className="pt-6">
            <RightIcon></RightIcon> 
          </div>
        </div>
      </div>
      <div className="h-10 mt-10">
        <UserData data={data}></UserData>
      </div>
    </div>
  );
}
