import { Link } from 'react-router-dom'
import {
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Stack
} from '@mui/material'

const BlogList = ({ blogs }) => {
  const sortedBlogs = [...blogs].sort(
    (a, b) => b.likes - a.likes
  )

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}
      >
        Explore Blogs
      </Typography>

      <Stack spacing={2}>
        {sortedBlogs.map(blog => (
          <Card
            key={blog.id}
            component={Link}
            to={`/blogs/${blog.id}`}
            elevation={1}
            sx={{
              textDecoration: 'none',
              display: 'block',
              borderRadius: 2,
              transition: 'all 0.2s ease-in-out',
              borderLeft: '5px solid',
              borderColor: 'primary.main',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: 6,
                borderColor: 'secondary.main',
                backgroundColor: 'action.hover',
              }
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2.5,
                px: 3,
                '&:last-child': { pb: 2.5 }
              }}
            >
              <Box sx={{ pr: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 0.5
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  By {blog.author}
                </Typography>
              </Box>

              <Chip
                label={` ${blog.likes} likes`}
                color="primary"
                variant="outlined"
                sx={{
                  fontWeight: 'bold',
                  borderRadius: '16px',
                  backgroundColor: 'background.paper'
                }}
              />
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}

export default BlogList