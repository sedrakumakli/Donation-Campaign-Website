import "./CampaignFilter.css";
import { MenuItem, Select, FormControl, Button, Autocomplete, TextField } from "@mui/material";
import { getProjects } from "../../services/projects";
import { useGetData } from "../../customHooks/reactQuery/useGetData";
import { getCities, getDistricts, getGovernorates, getStatuses } from "../../services/campaigns";


const CampaignFilter = ({ filters, setFilters }) => {

  const {
    data: governoratesData,
    isFetching: isFetchingGovernorates,
    error: governoratesErr,
  } = useGetData({
    queryKey: ['governorates'],
    queryFn: getGovernorates,
  });
  const governorates = governoratesData?.data || [];

  const {
    data: citiesData,
    isFetching: isFetchingCities,
    error: citiesErr,
  } = useGetData({
    queryKey: ['cities'],
    queryFn: getCities,
  });
  const allCities = citiesData?.data || [];

  const {
    data: districtsData,
    isFetching: isFetchingDistricts,
    error: districtsErr,
  } = useGetData({
    queryKey: ['districts'],
    queryFn: getDistricts,
  });
  const allDistricts = districtsData?.data || [];

  const {
    data: projectData,
    isFetching: isFetchingProjects,
    error: projectsErr,
  } = useGetData({
    queryKey: ['project'],
    queryFn: getProjects,
  });

  const projects = projectData?.data || [];

  const {
    data: statusesData,
    isFetching: isFetchingStatuses,
    error: statusesErr,
  } = useGetData({
    queryKey: ['status'],
    queryFn: getStatuses,
  });

  const statuses = statusesData?.data || [];



  const cities = allCities.filter(
    (city) =>
      city.governorate?.uuid === filters.governorate
  );

  const regions = allDistricts.filter(
    (district) =>
      district.city?.uuid === filters.city
  );

  const handleGovernorateChange = async (e) => {
    const governorateId = e.target.value;

    setFilters((prev) => ({
      ...prev,
      governorate: governorateId,
      city: "",
      region: "",
    }));

    setCities([]);
    setRegions([]);
  };

  const handleCityChange = async (e) => {
    const cityId = e.target.value;

    setFilters((prev) => ({
      ...prev,
      city: cityId,
      region: "",
    }));

    setRegions([]);

  };
  const handleRegionChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      region: e.target.value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      governorate: "",
      city: "",
      region: "",
      project: null,
      status: [],
    });

  };
  console.log("governorates =", governorates);
  return (
    <div className="filter-card">

      <h2 className="filter-title">تصفية الحملات</h2>

      {/* الموقع */}
      <div className="filter-section">
        <h3>الموقع</h3>
        <FormControl
          variant="standard"
          fullWidth
          sx={{
            borderBottom: "1px solid #E0E0E0",
            pb: 1,
            marginBottom: "16px"
          }}
        >
          <Select
            value={filters.governorate}
            onChange={handleGovernorateChange}
            displayEmpty
            disableUnderline
            sx={{
              textAlign: "left",
              color: filters.governorate
                ? "#000E0C"
                : "#6B7280",
              "& .MuiInputBase-root":{
              padding: "0 !important"
              },

              "& .MuiSelect-select": {
                textAlign: "right",
              },

              "& .MuiSelect-icon": {
                left: 0,
                right: "auto",
                color: "#6B7280",
              },
            }}
          >
            <MenuItem value="">
              اختر المحافظة
            </MenuItem>

            {governorates?.map((gov) => (
              <MenuItem
                key={gov.uuid}
                value={gov.uuid}
              >
                {gov.governorate_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          fullWidth
          sx={{
            borderBottom: "1px solid #E0E0E0",
            pb: 1,
          }}
        >
          <Select
            value={filters.city}
            onChange={handleCityChange}
            displayEmpty
            disableUnderline
            disabled={!filters.governorate}
            sx={{
              textAlign: "left",
              color: filters.governorate ? "#000E0C" : "#6B7280",
              "& .MuiInputBase-root":{
              padding: "0 !important"
              },

              "& .MuiSelect-select": {
                textAlign: "right",
              },

              "& .MuiSelect-icon": {
                left: 0,
                right: "auto",
                color: "#6B7280",
              },
            }}
          >
            <MenuItem value="">
              اختر المدينة
            </MenuItem>

            {cities.map((city) => (
              <MenuItem
                key={city.uuid}
                value={city.uuid}
              >
                {city.city_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          fullWidth
          sx={{
            borderBottom: "1px solid #E0E0E0",
            pb: 1,
          }}
        >

          <Select
            value={filters.region}
            onChange={handleRegionChange}
            displayEmpty
            disableUnderline
            disabled={!filters.city}
            sx={{
              textAlign: "left",
              color: filters.governorate ? "#000E0C" : "#6B7280",
              "& .MuiInputBase-root":{
              padding: "0 !important"
              },
              "& .MuiSelect-select": {
                textAlign: "right",
              },

              "& .MuiSelect-icon": {
                left: 0,
                right: "auto",
                color: "#6B7280",
              },
            }}
          >
            <MenuItem value="">
              اختر المنطقة
            </MenuItem>

            {regions.map((region) => (
              <MenuItem
                key={region.uuid}
                value={region.uuid}
              >
                {region.district_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* المشروع */}
      <div className="filter-section">
        <h3>المشروع</h3>
        <FormControl
          variant="standard"
          fullWidth
          sx={{
            borderBottom: "1px solid #E0E0E0",
            pb: 1,
          }}
        >
          <Autocomplete
            options={projects}
            getOptionLabel={(option) => option.name}
            value={
              projects.find((project) => project.uuid === filters.project) || null
            }
            onChange={(event, value) => {
              setFilters((prev) => ({
                ...prev,
                project: value?.uuid || null,
              }));
            }}
            sx={{
              direction: "rtl",
              "& .MuiInputBase-root": {
                padding: "0 !important",
                minHeight: "40px",
                direction: "rtl",
              },

              "& fieldset": {
                border: "none",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },

              "& input": {
                textAlign: "right",
                direction: "rtl",
                // padding: "8px 0  !important",
                fontSize: "16px !important",
              },

              "& .MuiAutocomplete-endAdornment": {
                left: " 0 !important",
                right: "auto !important",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="ابحث عن مشروع"
              />
            )}
          />
        </FormControl>
      </div>
      {/* حالة الحملة */}
      <div className="filter-section">
        <h3>حالة الحملة</h3>

        {statuses.map((status) => (
          <label className="checkbox-row" key={status}>
            <input
              type="checkbox"
              value={status}
              checked={filters.status.includes(status)}
              onChange={(e) => {
                const { value, checked } = e.target;

                setFilters((prev) => ({
                  ...prev,
                  status: checked
                    ? [...prev.status, value]
                    : prev.status.filter((item) => item !== value),
                }));
              }}
            />

            {status}
          </label>
        ))}
      </div>
      <hr />

      <Button
        variant='outlined'
        sx={{
          borderRadius: '8px',
          border: '1px solid #E0E0E0',
          px: 2,
          display: { xs: 'none', md: 'flex' },
          bgcolor: '#fff',
          color: 'var(--main-color)',
          height: '60px',
          width: '300px',
          fontSize: '20px',
        }}
        onClick={resetFilters}
      >
        إعادة تعيين
      </Button>

    </div>
  );
};

export default CampaignFilter;