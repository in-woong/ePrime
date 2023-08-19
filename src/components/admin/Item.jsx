import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Item({ title, data }) {
  const [userUrl, setUserUrl] = useState('/');

  useEffect(() => {
    switch (title) {
      case '주요기사 및 법령정보':
        setUserUrl(data.url);
        break;
      case '선별 - 원료':
        setUserUrl(`/admin/form_product/${data.id}`);
        break;
      case '원료 - 제품생산':
        setUserUrl(`/admin/form_produce/${data.id}`);
        break;
      case '제품 - 도매상':
        setUserUrl(`/admin/form_pick/${data.id}`);
        break;
      case 'ESG 경영':
        setUserUrl(`/admin/form_esg/${data.id}`);
        break;
      case '스마트공장 지원 신청':
        setUserUrl(`/admin/form_smartfactory/${data.id}`);
        break;
      case '기타 도움이 필요한 사항':
        setUserUrl(`/admin/form_etc/${data.id}`);
        break;
      default:
        break;
    }
  }, [userUrl]);
  return (
    <li
      className='flex h-12 px-4 w-full justify-between items-center border-b-2 bodrer-cyan-700'
      key={data.id}
    >
      <span>{data.title || data.company}</span>
      <Link to={userUrl} state={data}>
        바로가기
      </Link>
    </li>
  );
}
