import React from 'react';
import Link from 'next/link';

type Props = {
  data: UserModel
  size?: 'big' | 'normal'
  disabled?: boolean
};

const Avatar = (props: Props) => {
  return (
    <>
      <style jsx={true}>{`
        .avatar {
          display: flex;
          margin-top: 10px;
          align-items: center;
        }
        .avatar:link,
        .avatar:hover,
        .avatar:visited {
          color: inherit;
          text-decoration: none;
        }
        .avatar:hover {
          text-decoration: underline;
        }
        .avatar-disabled {
          pointer-events: none;
          color: inherit;
          text-decoration: none;
        }
        img {
          width: ${props.size === 'big' ? '150px' : '50px'};
          margin-right: 10px;
        }
        p {
          padding: 0;
          margin: 0;
          border: 0;
        }
      `}</style>
      <Link href={`/users/${props.data.name}`}>
        <a className={props.disabled ? 'avatar-disabled' : 'avatar'}>
          <img src={props.data.photo} alt={props.data.name} />
          <div className='avatar__text'>
            <p>name : {props.data.name}</p>
            <p>email : {props.data.email}</p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Avatar;
