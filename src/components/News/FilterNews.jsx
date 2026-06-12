import {
  Box,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';

const FilterNews = ({ search, setSearch, category, setCategory, count }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const categories = ['الكل', 'تعليم', 'تكنولوجيا', 'أخبار'];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        flexWrap: 'wrap',
        mb: 4,
      }}
    >
      {/* LEFT: Search */}
      <Box
        sx={{
          flex: 1,
          minWidth: '250px',
          borderBottom: '1px solid #8c9ea0',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          py: 1,
          '&:focus-within': {
            borderBottom: '2px solid #014a5b',
          },
        }}
      >
        <SearchIcon sx={{ color: '#8c9ea0' }} />

        <InputBase
          placeholder='ابحث حسب العنوان...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            flex: 1,
            fontSize: '18px',
          }}
        />
      </Box>

      {/* RIGHT: Filter + Count */}
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          flexWrap: 'wrap',
          mb: 4,
        }}
      >
        {categories.map((cat) => {
          const isActive = category === cat;

          return (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setCategory(cat)}
              variant={isActive ? 'filled' : 'outlined'}
              sx={{
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '8px',

                transition: '0.3s',

                /* ACTIVE */
                ...(isActive && {
                  backgroundColor: '#014a5b',
                  color: '#fff',
                  border: 'none',
                  '&:hover': {
                    backgroundColor: '#014a5b',
                  },
                }),

                /* INACTIVE */
                ...(!isActive && {
                  borderColor: '#8c9ea0',
                  color: '#8c9ea0',
                  '&:hover': {
                    borderColor: '#014a5b',
                    color: '#014a5b',
                  },
                }),
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default FilterNews;
