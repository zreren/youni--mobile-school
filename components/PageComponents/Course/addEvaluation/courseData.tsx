import React from 'react';
import CourseIcon from './course.svg';
import NessIcon from './ness.svg';
import Score1Icon from './score/1.svg';
import Score2Icon from './score/2.svg';
import Score3Icon from './score/3.svg';
import Score4Icon from './score/4.svg';
import Score5Icon from './score/5.svg';
import Score1ActiveIcon from './score-avtive/1.svg';
import Score2ActiveIcon from './score-avtive/2.svg';
import Score3ActiveIcon from './score-avtive/3.svg';
import Score4ActiveIcon from './score-avtive/4.svg';
import Score5ActiveIcon from './score-avtive/5.svg';
const getIcon = (props)=>{
    const Node = props
    return <Node></Node>
}
const Item = (props: any) => {
  const { name, item, icon,iconListActive } = props;
  const [active, setActive] = React.useState(0);
  console.log(icon, 'icon');
  return (
    <div>
      <div className="input-group bg-white w-full flex flex-col justify-between h-22">
        <span className="bg-white font-medium text-blueTitle text-sm pt-4">
          <NessIcon className="mr-1"></NessIcon> {name}
        </span>
        <div className="flex justify-between w-full p-4">
          <div className="flex flex-col items-center" onClick={()=>{setActive(1)}}>
            <div>{getIcon(active===1?iconListActive[0]:icon[0])}</div>
            <div className="text-xs text-gray-400">1</div>
            <div className="text-sm text-gray-400">{item[0]}</div>
          </div>
          <div className="flex flex-col items-center" onClick={()=>{setActive(2)}}>
            {getIcon(active===2?iconListActive[1]:icon[1])}
            <div className="text-xs text-gray-400">2</div>
            <div className="text-sm text-gray-400">{item[1]}</div>
          </div>
          <div className="flex flex-col items-center" onClick={()=>{setActive(3)}}>
            {getIcon(active===3?iconListActive[2]:icon[2])}
            <div className="text-xs text-gray-400">3</div>
            <div className="text-sm text-gray-400">{item[2]}</div>
          </div>
          <div className="flex flex-col items-center" onClick={()=>{setActive(4)}}>
            {getIcon(active===4?iconListActive[3]:icon[3])}
            <div className="text-xs text-gray-400">4</div>
            <div className="text-sm text-gray-400">{item[3]}</div>
          </div>
          <div className="flex flex-col items-center" onClick={()=>{setActive(5)}}>
            {getIcon(active===5?iconListActive[4]:icon[4])}
            <div className="text-xs text-gray-400">5</div>
            <div className="text-sm text-gray-400">{item[4]}</div>
          </div>
        </div>
      </div>
      <div className="divider m-0 pl-4 pr-4 opacity-30 h-1"></div>
    </div>
  );
};
const iconList = [Score1Icon, Score2Icon, Score3Icon, Score4Icon, Score5Icon];
const iconListActive = [Score1ActiveIcon, Score2ActiveIcon, Score3ActiveIcon, Score4ActiveIcon, Score5ActiveIcon];

const itemList = [
  {
    name: '教授评价',
    item: ['非常糟糕', '勉勉强强', '感觉还行', '的确不错', '强烈推荐'],
    icon: iconList,
    iconListActive:iconListActive
  },
  {
    name: '内容难度',
    item: ['非常糟糕', '勉勉强强', '感觉还行', '的确不错', '强烈推荐'],
    icon: iconList,
    iconListActive:iconListActive
  },
  {
    name: '作业难度',
    item: ['非常糟糕', '勉勉强强', '感觉还行', '的确不错', '强烈推荐'],
    icon: iconList,
    iconListActive:iconListActive
  },
  {
    name: '考试难度',
    item: ['非常糟糕', '勉勉强强', '感觉还行', '的确不错', '强烈推荐'],
    icon: iconList.slice().reverse(),
    iconListActive:iconListActive.slice().reverse()
  },
];
export default function courseInfo() {
  return (
    <div className="bg-white pb-5 mt-4">
      <label className="input-group bg-white w-full flex justify-between h-12 pl-4 ">
        <div className="flex items-center ">
          <CourseIcon className="mr-2"></CourseIcon>
          <div className="bg-white font-medium text-blueTitle text-base">
            数据评价
          </div>
        </div>
      </label>
      <div className="divider m-0 pl-4 pr-4 opacity-30 h-1"></div>
      {itemList.map((item) => {
        return <Item name={item.name} item={item.item} iconListActive={item.iconListActive} icon={item.icon}></Item>;
      })}
    </div>
  );
}
