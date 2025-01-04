import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@/App';
import axios from 'axios';
import { reqs } from '@/axios/requests';

export default function DashboardContent() {
  const { appUser } = useAppContext();
  const [selectedTab, setSelectedTab] = useState('explore');
  const navigate = useNavigate();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    if (appUser.id && appUser.token) {
      axios
        .get(reqs.GET_CONTENTS, {
          headers: {
            Authorization: `Bearer ${appUser.token}`,
          },
        })
        .then((res) => {
          if (res.data?.data) {
            setContents(res.data?.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [appUser.id]);

  console.log(contents);

  const myWorks = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      user: {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 120,
    },
    {
      id: 2,
      title: 'Project Beta',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user: {
        name: 'Jane Smith',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 98,
    },
    {
      id: 3,
      title: 'Project Gamma',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      user: {
        name: 'Alice Johnson',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 76,
    },
    {
      id: 4,
      title: 'Project Delta',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      user: {
        name: 'Michael Brown',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 150,
    },
    {
      id: 5,
      title: 'Project Epsilon',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user: {
        name: 'Sarah Wilson',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 110,
    },
    {
      id: 6,
      title: 'Project Zeta',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      user: {
        name: 'David Lee',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 90,
    },
  ];

  const othersWork = [
    {
      id: 7,
      title: 'Project Theta',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      user: {
        name: 'Emily Clark',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 130,
    },
    {
      id: 8,
      title: 'Project Iota',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user: {
        name: 'James Miller',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 105,
    },
    {
      id: 9,
      title: 'Project Kappa',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      user: {
        name: 'Olivia Davis',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 95,
    },
    {
      id: 10,
      title: 'Project Lambda',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      user: {
        name: 'Sophia Martinez',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 140,
    },
    {
      id: 11,
      title: 'Project Mu',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user: {
        name: 'Liam Anderson',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 115,
    },
    {
      id: 12,
      title: 'Project Nu',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      user: {
        name: 'Isabella Thomas',
        photo: 'https://via.placeholder.com/40',
      },
      reactions: 100,
    },
  ];

  const worksToShow = selectedTab === 'explore' ? othersWork : myWorks;

  const handleCardClick = (id, content) => {
    navigate(`/dashboard/content/${id}`, { state: { content: content } });
  };

  return (
    <div>
      <div className='flex justify-center my-4'>
        <button
          className={`px-4 py-2 mx-2 rounded-full ${
            selectedTab === 'explore'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-black'
          }`}
          onClick={() => setSelectedTab('explore')}
        >
          Explore
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-full ${
            selectedTab === 'myContents'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-black'
          }`}
          onClick={() => setSelectedTab('myContents')}
        >
          My Contents
        </button>
      </div>
      <section className='my-10'>
        <h2 className='text-2xl font-bold text-white mb-4'>
          {selectedTab === 'explore' ? 'Explore' : 'My Contents'}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {(selectedTab === 'explore'
            ? contents
            : contents?.filter((item) => item.user === appUser?.id)
          ).map((work, key) => (
            <div
              key={key}
              className='bg-gray-800 p-4 rounded-lg shadow-lg text-white cursor-pointer'
              onClick={() => handleCardClick(work.id, work)}
            >
              <h3 className='text-lg font-semibold mb-2'>{work.title}</h3>
              <p className='mb-4'>{work.bangla_desc.substring(0, 20)} ...</p>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  {/* <img
                    src={work.user.photo}
                    alt={work.user.name}
                    className='w-10 h-10 rounded-full mr-2'
                  /> */}
                  <span className='opacity-70'>
                    {work?.user?.name || 'Fahim Hossain'}
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <Heart className='mr-1 text-xs' />
                  <span className='text-base'>{work.likes_num}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
