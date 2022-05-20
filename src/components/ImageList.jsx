import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {getPhotos} from './GalleryState';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 700,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function TitlebarImageList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const photos = useSelector(state => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  },[dispatch,photos]);

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
    
        </ImageListItem>
        {photos.map((photo) => (
          <ImageListItem key={photo.id}>
            <img src={photo.urls.thumb} alt={photo.alt} />
            <ImageListItemBar
              title={photo.user.name}
              subtitle={<span>by: {photo.created_at}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${photo.user.name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}