import { Stack, Box } from '@mui/material'
import { VideoCard } from './VideoCard'
import { ChannelCard } from './ChannelCard'

export function Videos ({ videos, direction }) {
  if (!videos?.length) return 'Loading'

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  )
}
