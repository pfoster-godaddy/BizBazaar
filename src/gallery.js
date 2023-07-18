import React from 'react';
import ZoomedOut from './components/zoomedOut.js';
import db from './data.js';
import Navbar from './components/navbar.js';
import { useState } from 'react';
import './gallery.css';

const Gallery = (props) => {
    const [tag, setTag] = useState(props?.match?.params?.id || '');
    const [search, setSearch] = useState('');
    const tags = db.getAllTags();
    const indexesArr = db.getIndexByTag(tag);

    return (
        <div className='gallery'>
            <Navbar />
            <div className='gallery-header'>
                <div className='gal-search'>
                    <div className='gal-search-bar'>
                        <input type='text' placeholder='Find a stall' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                        <div className='searchGal'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20.5304 19.46L16.0546 14.9842C17.2622 13.5514 17.8735 11.7097 17.7623 9.83919C17.6512 7.96871 16.826 6.21234 15.4572 4.93273C14.0883 3.65313 12.2804 2.948 10.4067 2.96294C8.53298 2.97788 6.73654 3.71176 5.38831 5.01304C4.04007 6.31431 3.24301 8.08363 3.16168 9.95564C3.08035 11.8277 3.72098 13.6594 4.95128 15.0727C6.18159 16.486 7.90762 17.3729 9.77298 17.5503C11.6383 17.7277 13.5006 17.182 14.9752 16.0259L19.4699 20.5205C19.6106 20.6607 19.8012 20.7393 19.9998 20.7392C20.1985 20.739 20.3889 20.66 20.5294 20.5195C20.6698 20.379 20.7488 20.1886 20.749 19.99C20.7492 19.7913 20.6706 19.6007 20.5304 19.46ZM4.75013 10.3335C4.74902 9.3855 4.9823 8.45193 5.42923 7.6159C5.87616 6.77986 6.52286 6.0673 7.31177 5.54164C8.10068 5.01598 9.00732 4.69353 9.95098 4.60299C10.8946 4.51245 11.8461 4.65664 12.7205 5.02271C13.595 5.38879 14.3654 5.96539 14.9631 6.7012C15.5608 7.437 15.9674 8.30918 16.1465 9.2401C16.3257 10.171 16.2719 11.1318 15.9899 12.0369C15.708 12.942 15.2066 13.7633 14.5305 14.4278C14.5021 14.4514 14.4766 14.4715 14.4519 14.4992C13.6376 15.2746 12.6137 15.7938 11.507 15.9926C10.4004 16.1913 9.25977 16.0608 8.22664 15.6171C7.19351 15.1735 6.31335 14.4364 5.69534 13.4971C5.07733 12.5579 4.74867 11.4578 4.75013 10.3335Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    {tag && <button className='gal-search-button' onClick={() => {setTag('');setSearch('')}}>{tag}<span style={{marginLeft: "10px", fontSize: '20px', marginTop: '2px'}}>&times;</span></button>}
                    {!tag && 
                        <div className='gal-buttons'>
                            {tags.map((tag, index) => {
                                return(<button key={index} onClick={() => {setTag(tag); setSearch(tag)}}>{tag}</button>)
                            }
                            )}
                        </div>
                    }
                </div>
                <div>
                    <h1 className='galleryh1'>Discover</h1>
                    <ZoomedOut indexesArr={indexesArr} />
                </div>
            </div>
            
        </div>
    )
}

export default Gallery;