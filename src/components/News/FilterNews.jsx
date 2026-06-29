import { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  InputBase,
  Popover,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckIcon from '@mui/icons-material/Check';
import CustomInput from '../common/CustomInput';
import NewsCategoriesSkeleton from '../../Skeleton/NewsCategoriesSkeleton';
import { useGetData } from '../../customHooks/reactQuery/useGetData';
import { getNewsCategories } from '../../services/news';

const BRAND_COLOR = '#014a5b';

const getPillSx = (isActive) => ({
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: 500,
  height: '34px',
  border: 'none',
  borderRadius: 2,
  backgroundColor: isActive ? BRAND_COLOR : 'transparent',
  color: isActive ? '#fff' : '#8c9ea0',
  transition: '0.2s',
  '&:hover': {
    backgroundColor: isActive ? BRAND_COLOR : 'rgba(1,74,91,0.08)',
  },
});

/**
 * Search + category filter toolbar for the news page.
 *
 * The category list can grow without limit (the admin can type a new
 * category at any time), so only the most frequently used categories are
 * shown as quick chips. Everything else lives behind a searchable "أخرى"
 * overflow so the layout never breaks no matter how many categories exist.
 *
 * Props:
 * - categories: string[]            full list of category names (master list)
 * - news: object[]                  full news list, used to rank categories by usage
 * - search: string                  current search value (controlled)
 * - onSearchChange: (value) => void
 * - category: string                current selected category, defaults to 'الكل'
 * - onCategoryChange: (value) => void
 * - resultsCount?: number           shown on the right side if provided
 * - topCategoriesCount?: number     how many chips to show before "أخرى" (default 4)
 */
const FilterNews = ({
  news = [],
  search,
  onSearchChange,
  category,
  onCategoryChange,
  topCategoriesCount = 4,
}) => {
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const [categorySearchTerm, setCategorySearchTerm] = useState('');

  const {
    data: categoriesData,
    isFetching: isFetchingCategories,
    error: categoriesErr,
  } = useGetData({
    queryKey: ['news-categories'],
    queryFn: getNewsCategories,
  });

  const categories = categoriesData?.data || [];

  const isCategoryFilterEnabled = category !== 'الكل';

  const categoryCounts = news.reduce((acc, item) => {
    if (!item.category) return acc;
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const sortedCategories = [...categories].sort(
    (a, b) => (categoryCounts[b] || 0) - (categoryCounts[a] || 0),
  );

  const topCategories = sortedCategories.slice(0, topCategoriesCount);
  const otherCategories = sortedCategories.slice(topCategoriesCount);

  const isOtherCategorySelected = otherCategories.includes(category);
  const otherChipLabel = isOtherCategorySelected ? category : 'أخرى';

  const filteredOtherCategories = otherCategories.filter((cat) =>
    cat.includes(categorySearchTerm),
  );

  const handleMoreClick = (event) => setMoreAnchorEl(event.currentTarget);

  const handleMoreClose = () => {
    setMoreAnchorEl(null);
    setCategorySearchTerm('');
  };

  const handleSelectOtherCategory = (cat) => {
    onCategoryChange(cat);
    handleMoreClose();
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'end',
          gap: 2,
          mb: 5,
          borderRadius: 3,
        }}
      >
        <CustomInput
          inputType='textField'
          placeholder='ابحث حسب العنوان...'
          styles={{
            width: '400px',
            height: 'auto',
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'var(--main-color)', // لون اللابل عند focus
            },
          }}
          value={search}
          setValue={onSearchChange}
        />

        {isFetchingCategories ? (
          <NewsCategoriesSkeleton />
        ) : (
          <Box
            sx={{
              display: 'flex',
              gap: 0.75,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Chip
              label='الكل'
              onClick={() => onCategoryChange('الكل')}
              sx={getPillSx(!isCategoryFilterEnabled)}
            />

            {topCategories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => onCategoryChange(cat)}
                sx={getPillSx(category === cat)}
              />
            ))}

            {otherCategories.length > 0 && (
              <Chip
                icon={
                  <MoreHorizIcon
                    sx={{
                      fontSize: '18px',
                      color: isOtherCategorySelected ? '#fff' : '#8c9ea0',
                    }}
                  />
                }
                label={otherChipLabel}
                onClick={handleMoreClick}
                sx={getPillSx(isOtherCategorySelected)}
              />
            )}
          </Box>
        )}
      </Box>

      <Popover
        open={Boolean(moreAnchorEl)}
        anchorEl={moreAnchorEl}
        onClose={handleMoreClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ width: 240, p: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              borderBottom: '1px solid #e7eeee',
              pb: 1,
              mb: 1,
            }}
          >
            <SearchIcon sx={{ color: '#8c9ea0', fontSize: '18px' }} />
            <InputBase
              placeholder='بحث عن فئة...'
              value={categorySearchTerm}
              onChange={(e) => setCategorySearchTerm(e.target.value)}
              sx={{ flex: 1, fontSize: '13px' }}
              autoFocus
            />
          </Box>

          <List sx={{ maxHeight: 220, overflowY: 'auto', py: 0 }}>
            {filteredOtherCategories.length === 0 ? (
              <Typography
                sx={{
                  fontSize: '13px',
                  color: '#8c9ea0',
                  textAlign: 'center',
                  py: 2,
                }}
              >
                لا توجد نتائج
              </Typography>
            ) : (
              filteredOtherCategories.map((cat) => (
                <ListItemButton
                  key={cat}
                  onClick={() => handleSelectOtherCategory(cat)}
                  sx={{
                    borderRadius: 2,
                    py: 0.75,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <ListItemText
                    primary={cat}
                    primaryTypographyProps={{
                      fontSize: '13px',
                      fontWeight: category === cat ? 500 : 400,
                      color: category === cat ? BRAND_COLOR : 'inherit',
                    }}
                  />
                  {category === cat && (
                    <CheckIcon sx={{ fontSize: '16px', color: BRAND_COLOR }} />
                  )}
                </ListItemButton>
              ))
            )}
          </List>
        </Box>
      </Popover>
    </>
  );
};

export default FilterNews;
