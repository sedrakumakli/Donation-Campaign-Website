import { useEffect, useState } from "react";
import "./CampaignFilter.css";
import { MenuItem, Select, FormControl, Button, Autocomplete, TextField } from "@mui/material";
import axios from "axios";

const projects = [
  { id: 1, name: "بئر ماء في ريف حلب" },
  { id: 2, name: "ترميم مدرسة الأمل" },
  { id: 3, name: "السلال الغذائية" },
  { id: 4, name: "كسوة الشتاء" },
  { id: 5, name: "مخيمات النازحين" },
  { id: 6, name: "إفطار صائم" },
];
console.log(projects);
const CampaignFilter = ({ filters, setFilters }) => {



  const [governorates, setGovernorates] = useState([]);
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    getGovernorates();
  }, []);

  const getGovernorates = async () => {
    try {
      const response = await axios.get("/governorates");
      console.log("API Response:", response.data);
      setGovernorates(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };


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

    try {
      const response = await axios.get(
        `/cities?governorateId=${governorateId}`
      );

      setCities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCityChange = async (e) => {
    const cityId = e.target.value;

    setFilters((prev) => ({
      ...prev,
      city: cityId,
      region: "",
    }));

    setRegions([]);

    try {
      const response = await axios.get(
        `/regions?cityId=${cityId}`
      );

      setRegions(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegionChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      region: e.target.value,
    }));
  };
  const handleStatusChange = (e) => {
    const { name, checked } = e.target;

    setFilters((prev) => ({
      ...prev,
      status: checked
        ? [...prev.status, name]
        : prev.status.filter(
          (item) => item !== name
        ),
    }));
  };

  const resetFilters = () => {
    setFilters({
      governorate: "",
      city: "",
      region: "",
      project : null,
      status: [],
    });

    setCities([]);
    setRegions([]);
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
              textAlign: "right",
              color: filters.governorate
                ? "#000E0C"
                : "#6B7280",

              "& .MuiSelect-select": {
                textAlign: "left",
              },

              "& .MuiSelect-icon": {
                left: "auto",
                right: 0,
                color: "#6B7280",
              },
            }}
          >
            <MenuItem value="">
              اختر المحافظة
            </MenuItem>

            {governorates?.map((gov) => (
              <MenuItem
                key={gov.id}
                value={gov.id}
              >
                {gov.name}
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
              textAlign: "right",
              color: filters.governorate ? "#000E0C" : "#6B7280",

              "& .MuiSelect-select": {
                textAlign: "left",
              },

              "& .MuiSelect-icon": {
                left: "auto",
                right: 0,
                color: "#6B7280",
              },
            }}
          >
            <MenuItem value="">
              اختر المدينة
            </MenuItem>

            {cities.map((city) => (
              <MenuItem
                key={city.id}
                value={city.id}
              >
                {city.name}
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
              textAlign: "right",
              color: filters.governorate ? "#000E0C" : "#6B7280",

              "& .MuiSelect-select": {
                textAlign: "left",
              },

              "& .MuiSelect-icon": {
                left: "auto",
                right: 0,
                color: "#6B7280",
              },
            }}
          >
            <MenuItem value="">
              اختر المنطقة
            </MenuItem>

            {regions.map((region) => (
              <MenuItem
                key={region.id}
                value={region.id}
              >
                {region.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

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
      projects.find((project) => project.id === filters.project) || null
    }
    onChange={(event, value) => {
      setFilters((prev) => ({
        ...prev,
        project: value?.id || null,
      }));
    }}
    sx={{
      "& .MuiInputBase-root": {
        padding: 0,
        minHeight: "40px",
        
      },

      "& fieldset": {
        border: "none",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },

      "& input": {
        textAlign: "left",
        padding: "8px 0",
        fontSize: "16px",
      },

      "& .MuiAutocomplete-endAdornment": {
        left:"auto",
        right: 0,
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

        <label className="checkbox-row">
          <input
            type="checkbox"
            name="completed"
            checked={filters.status.includes("completed")}
            onChange={handleStatusChange}
          />
          مكتملة
        </label>

        <label className="checkbox-row">
          <input
            type="checkbox"
            name="new"
            checked={filters.status.includes("new")}
            onChange={handleStatusChange}
          />
          جديدة
        </label>

        <label className="checkbox-row">
          <input
            type="checkbox"
            name="active"
            checked={filters.status.includes("active")}
            onChange={handleStatusChange}
          />
          نشطة
        </label>

        <label className="checkbox-row">
          <input
            type="checkbox"
            name="ended"
            checked={filters.status.includes("ended")}
            onChange={handleStatusChange}
          />
          منتهية
        </label>
      </div>
      <hr />

      <Button
        variant='outlined'
        sx={{
          borderRadius: '8px',
          // borderColor:"gray",
          border: '1px solid #E0E0E0',
          px: 4,
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