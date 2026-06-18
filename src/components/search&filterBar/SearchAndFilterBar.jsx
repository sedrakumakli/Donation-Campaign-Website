import { Box, IconButton, InputAdornment, InputBase, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import "./SearchAndFilterBar.css";
import { useState } from "react";
const SearchAndFilterBar = ({ onFilterClick ,searchKey , setSearchKey}) => {
    // const [searchedKey, setSearchedKey] = useState('');
    return (
        <div className="searchAndfilterBar">
            <div className="conatiner">
                <div className="search-bar">
                    <Box
                        sx={{
                            borderBottom: "1px solid #6B7280",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            py: 2,

                            "&:focus-within": {
                                borderBottom: "2px solid  #6B7280",
                            },
                        }}
                    >
                        <SearchIcon sx={{
                            color: "#6B7280",
                        }} />
                        <InputBase
                            placeholder="ابحث حسب الاسم"
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                            sx={{
                                flex: 1,
                                textAlign: "right",
                                fontSize: "20px",
                            }}
                        />

                    </Box>
                </div>
                <div className="filter-bar">
                    <IconButton
                        sx={{
                            // border: "2px solid #6B7280",
                            borderRadius: "8px",
                            p: 1.2,
                            backgroundColor: "#f5f6f7",

                            "& svg": {
                                fontsize: 24,
                                color: "#6B7280",
                            },
                        }}
                        onClick={() => {
                            onFilterClick();
                        }}
                    >
                        <FilterAltIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
export default SearchAndFilterBar;