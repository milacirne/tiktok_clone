import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
    return (
        <div className="videoFooter">
            <div className='videoFooter__details'>
                <h3>@{ name }</h3>
                <p>{ description }</p>
                <div className='videoFooter__details__music'>
                    <MusicNoteIcon className='videoFooter__details__music__icon'/>
                    <div className='videoFooter__details__music__text'>
                        <p>{ music }</p>
                    </div>
                </div>
            </div>
            <img 
                className='videoFooter__record'
                alt='Imagem de um vinil girando'
                src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
            
            />
        </div>
    );
};

export default VideoFooter;