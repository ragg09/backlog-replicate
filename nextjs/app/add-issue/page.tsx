'use client';
import React, { useState } from 'react';
import {
  Button,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Box,
  InputLabel,
  FormControl,
  TextField,
  styled,
  Container,
} from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import ImageIcon from '@mui/icons-material/Image';
import ReactMarkdown from 'react-markdown';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import MDEditor from '@uiw/react-md-editor';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#00796b',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#00695c',
  },
}));

const StyledIconButton = styled(IconButton)({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

const StyledTextField = styled(TextField)({
  padding: '10px',
});

const StyledSelect = styled(Select)({
  padding: '10px',
  width: '100%',
});

const AddIssue = () => {
  const [value, setValue] = React.useState('**Hello world!!!**');

  const handleMarkdownChange = (value) => {
    setValue(value);
  };

  const [taskDescription, setTaskDescription] = useState('Task');
  const [taskDetails, setTaskDetails] = useState(
    '* [ ] Task 1 * [ ] Task 2 * [ ] Task 3 # PR Link # Attachment # Test View Point - Should base from QA, DEV should ask QA # Testcase'
  );

  return (
    <Box p={2} maxWidth={1200} mx="auto">
      <Typography variant="h4">Add Issue</Typography>
      <Typography variant="body1" color="primary">
        <a href="#">Add Parent Issue</a>
      </Typography>
      <Box mt={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <FormControl fullWidth>
            <StyledSelect defaultValue="Task">
              <MenuItem value="Task">Task</MenuItem>
            </StyledSelect>
          </FormControl>
          <StyledButton>Preview</StyledButton>
          <StyledButton>Add</StyledButton>
        </Box>
        <StyledTextField
          variant="outlined"
          margin="normal"
          rows={2}
          multiline
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          fullWidth
        />

        {/* markdown */}

        <Container>
          <MDEditor
            data-color-mode="light"
            value={value}
            onChange={handleMarkdownChange}
            toolbarBottom
            // preview="live"
          />
        </Container>

        <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
          <Box flex={1} minWidth={300}>
            <InputLabel>Status</InputLabel>
            <FormControl fullWidth>
              <StyledSelect defaultValue="Open">
                <MenuItem value="Open">Open</MenuItem>
              </StyledSelect>
            </FormControl>
          </Box>
          <Box flex={1} minWidth={300}>
            <InputLabel>Assignee</InputLabel>
            <Box display="flex" gap={1}>
              <StyledTextField fullWidth variant="outlined" />
              <StyledButton variant="contained" color="secondary" style={{ padding: '10px' }}>
                Assign to myself
              </StyledButton>
            </Box>
          </Box>
          {/* Additional fields */}
          <Box flex={1} minWidth={300}>
            <InputLabel>Priority</InputLabel>
            <FormControl fullWidth>
              <StyledSelect defaultValue="Medium">
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </StyledSelect>
            </FormControl>
          </Box>
          <Box flex={1} minWidth={300}>
            <InputLabel>Due Date</InputLabel>
            <TextField type="date" fullWidth variant="outlined" />
          </Box>
          <Box flex={1} minWidth={300}>
            <InputLabel>Labels</InputLabel>
            <StyledTextField fullWidth variant="outlined" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddIssue;
