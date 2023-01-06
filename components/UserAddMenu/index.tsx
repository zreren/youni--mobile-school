import React from 'react';
import styles from './index.module.css';
import Icon1 from './1.svg';
import Icon2 from './2.svg';
import Icon3 from './3.svg';
import Icon4 from './4.svg';
import Icon5 from './5.svg';
import Subtract from './Subtract.svg';
import { useRouter } from 'next/router';

export default function index(props) {
  const router = useRouter();
  let body = document.body;
  return (
    <div
      onClick={() => {
        props.close();
      }}
      onTouchMove={(e)=>{
        e.stopPropagation();
        e.preventDefault();
      }}
      onTouchStart={(e)=>{
        e.stopPropagation();
        e.preventDefault();
      }}
      className="fixed bottom-0 z-30  w-screen h-screen backdrop-filter backdrop-blur-2xl"
    >
      <div
        onClick={() => {
          body.style.overflow = 'scroll';
          router.push({
            pathname: '/Schedules/AddCourse',
            query: { id: 1 },
          });
        }}
        className={styles.element}
      >
        <Icon4></Icon4>
      </div>
      <div
        onClick={() => {
          body.style.overflow = 'scroll';
          router.push({
            pathname: '/Schedules/AddCourse',
            query: { id: 2 },
          });
        }}
        className={styles.element}
      >
        <Icon5></Icon5>
      </div>
      <div
        className={styles.element}
        onClick={() => {
          body.style.overflow = 'scroll';
          router.push({
            pathname: '/[campus]/Course/evaluation',
            query: { campus: 'York' },
          });
        }}
      >
        <Icon1></Icon1>
      </div>
      <div
        onClick={() => {
          body.style.overflow = 'scroll';
          router.push({
            pathname: '/[campus]/post/addPost',
            query: { campus: 'York' },
          });
        }}
        className={styles.element}
      >
        <Icon2></Icon2>
      </div>
      <div
        onClick={() => {
          body.style.overflow = 'scroll';
          router.push({
            pathname: '/[campus]/post/addPost',
            query: { campus: 'York' },
          });
        }}
        className={styles.element}
      >
        <Icon3></Icon3>
      </div>
      <Subtract className="absolute bottom-0 w-screen -z-30"></Subtract>
    </div>
  );
}
