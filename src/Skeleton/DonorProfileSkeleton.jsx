import {
  Box,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const DonorProfileSkeleton = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F7F9F9',
        color: '#0f2a30',
        fontFamily: '"Cairo", system-ui, sans-serif',
      }}
    >
      <Box
        sx={{
          width: '100%',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6, lg: 10 },
          py: { xs: 4, md: 8 },
        }}
      >
        {/* Logout button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Skeleton
            variant='rounded'
            width={115}
            height={38}
            sx={{ borderRadius: '8px' }}
          />
        </Box>

        {/* ================= Header ================= */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: '12px',
            p: { xs: 2.5, md: 4 },
            background: 'linear-gradient(135deg, #014A5B, #003B49)',
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 2, md: 3.5 },
            flexWrap: 'wrap',
            overflow: 'hidden',
          }}
        >
          {/* Avatar */}
          <Skeleton
            variant='circular'
            width={96}
            height={96}
            sx={{
              flexShrink: 0,
              bgcolor: 'rgba(255,255,255,0.18)',
            }}
          />

          {/* Identity */}
          <Stack
            spacing={1}
            sx={{
              flex: 1,
              minWidth: { xs: '100%', sm: 220 },
            }}
          >
            {/* Name */}
            <Skeleton
              variant='text'
              width={180}
              height={32}
              sx={{
                transform: 'none',
                bgcolor: 'rgba(255,255,255,0.22)',
                borderRadius: 1,
              }}
            />

            {/* Email */}
            <Skeleton
              variant='text'
              width={230}
              height={22}
              sx={{
                transform: 'none',
                bgcolor: 'rgba(255,255,255,0.16)',
                borderRadius: 1,
              }}
            />

            {/* Phone */}
            <Skeleton
              variant='text'
              width={150}
              height={22}
              sx={{
                transform: 'none',
                bgcolor: 'rgba(255,255,255,0.16)',
                borderRadius: 1,
              }}
            />

            {/* Badge */}
            <Skeleton
              variant='rounded'
              width={100}
              height={32}
              sx={{
                bgcolor: 'rgba(255,255,255,0.16)',
                borderRadius: '999px',
              }}
            />
          </Stack>

          {/* Header Stats */}
          <Stack
            direction='row'
            spacing={1.5}
            sx={{
              flexWrap: 'wrap',
              width: { xs: '100%', lg: 'auto' },
            }}
          >
            {[1, 2].map((item) => (
              <Box
                key={item}
                sx={{
                  minWidth: { xs: 130, sm: 150 },
                  p: 1.5,
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                }}
              >
                <Skeleton
                  variant='rounded'
                  width={36}
                  height={36}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.16)',
                    borderRadius: '10px',
                  }}
                />

                <Stack spacing={0.3}>
                  <Skeleton
                    variant='text'
                    width={55}
                    height={20}
                    sx={{
                      transform: 'none',
                      bgcolor: 'rgba(255,255,255,0.22)',
                    }}
                  />
                  <Skeleton
                    variant='text'
                    width={75}
                    height={17}
                    sx={{
                      transform: 'none',
                      bgcolor: 'rgba(255,255,255,0.14)',
                    }}
                  />
                </Stack>
              </Box>
            ))}
          </Stack>
        </Paper>

        {/* ================= Password Card ================= */}
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: { xs: 2, md: 2.5 },
            border: '1px solid #E1ECEE',
            borderRadius: '12px',
            backgroundColor: '#fff',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Skeleton
              variant='text'
              width={130}
              height={24}
              sx={{ transform: 'none' }}
            />

            <Skeleton
              variant='text'
              width={90}
              height={24}
              sx={{ transform: 'none' }}
            />
          </Box>

          {/* Password dots */}
          <Skeleton
            variant='text'
            width={100}
            height={25}
            sx={{
              transform: 'none',
              mt: 1,
            }}
          />

          {/* Form */}
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              gap: 1.75,
              alignItems: 'flex-end',
              flexWrap: 'wrap',
            }}
          >
            {[1, 2].map((item) => (
              <Box
                key={item}
                sx={{
                  flex: 1,
                  minWidth: { xs: '100%', md: 220 },
                }}
              >
                <Skeleton
                  variant='text'
                  width={100}
                  height={20}
                  sx={{
                    transform: 'none',
                    mb: 0.5,
                  }}
                />

                <Skeleton
                  variant='rounded'
                  width='100%'
                  height={42}
                  sx={{
                    borderRadius: '8px',
                  }}
                />
              </Box>
            ))}

            <Stack direction='row' spacing={1}>
              <Skeleton
                variant='rounded'
                width={85}
                height={42}
                sx={{ borderRadius: '8px' }}
              />

              <Skeleton
                variant='rounded'
                width={75}
                height={42}
                sx={{ borderRadius: '8px' }}
              />
            </Stack>
          </Box>
        </Paper>

        {/* ================= Tabs ================= */}
        <Box
          sx={{
            mt: 3,
            px: 1,
            display: 'flex',
            gap: 3,
            borderBottom: '1px solid #E1ECEE',
          }}
        >
          {[1, 2].map((item) => (
            <Box
              key={item}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                py: 1.25,
              }}
            >
              <Skeleton
                variant='text'
                width={100}
                height={25}
                sx={{ transform: 'none' }}
              />

              <Skeleton
                variant='rounded'
                width={30}
                height={22}
                sx={{ borderRadius: '999px' }}
              />
            </Box>
          ))}
        </Box>

        {/* ================= Table ================= */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            mt: 2,
            border: '1px solid #E1ECEE',
            borderRadius: '16px',
            overflowX: 'auto',
            backgroundColor: '#fff',
          }}
        >
          <Table sx={{ minWidth: 640 }}>
            {/* Header */}
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: '#F4FAFB',
                }}
              >
                {[100, 140, 100, 110, 90].map((width, index) => (
                  <TableCell
                    key={index}
                    align='right'
                    sx={{
                      borderBottom: '1px solid #E1ECEE',
                      py: 2,
                    }}
                  >
                    <Skeleton
                      variant='text'
                      width={width}
                      height={20}
                      sx={{ transform: 'none' }}
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Rows */}
            <TableBody>
              {[1, 2, 3, 4, 5].map((row) => (
                <TableRow key={row}>
                  <TableCell sx={{ py: 1.75 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.25,
                      }}
                    >
                      <Skeleton
                        variant='rounded'
                        width={40}
                        height={40}
                        sx={{ borderRadius: '8px' }}
                      />

                      <Stack spacing={0.3}>
                        <Skeleton
                          variant='text'
                          width={130}
                          height={20}
                          sx={{ transform: 'none' }}
                        />
                        <Skeleton
                          variant='text'
                          width={80}
                          height={17}
                          sx={{ transform: 'none' }}
                        />
                      </Stack>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Skeleton
                      variant='text'
                      width={100}
                      height={20}
                      sx={{ transform: 'none' }}
                    />
                  </TableCell>

                  <TableCell>
                    <Skeleton
                      variant='text'
                      width={80}
                      height={20}
                      sx={{ transform: 'none' }}
                    />
                  </TableCell>

                  <TableCell>
                    <Skeleton
                      variant='rounded'
                      width={75}
                      height={28}
                      sx={{ borderRadius: '999px' }}
                    />
                  </TableCell>

                  <TableCell>
                    <Skeleton
                      variant='rounded'
                      width={65}
                      height={30}
                      sx={{ borderRadius: '8px' }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default DonorProfileSkeleton;
