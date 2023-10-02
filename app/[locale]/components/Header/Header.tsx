"use client";

import { Locale } from "@/i18n.config";
import MenuIcon from "@mui/icons-material/Menu";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Container from "@mui/material/Container";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header({ locale }: { locale: Locale }) {
  const t = useTranslations("header");
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const isWideScreen = useMediaQuery("(min-width:375px)");
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef?.current?.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const anchorRef = React.useRef<HTMLButtonElement>(null);
  // TODO: Create popup menu separate compornent
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ backgroundColor: "#f8f8f7" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            color="inherit"
            href="/"
            style={{
              alignItems: "center",
              color: "inherit",
              display: "flex",
              // textDecoration: "none",
            }}
          >
            <SyncAltIcon
              sx={{
                color: "info.main",
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="p"
              color="primary"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                textDecoration: "none",
              }}
            >
              CONVERTXPERT
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Header menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              ref={anchorRef}
              onClick={handleToggle}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    margin: "2.5rem 1.5rem",
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          onClick={() => {
                            router.push(`/${locale}/shoe-size/converter`);
                          }}
                        >
                          {t("shoeSizeConverter")}
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
            <Link
              color="primary"
              href="/"
              style={{
                alignItems: "center",
                color: "inherit",
                display: "flex",
                justifyContent: "center",
                // textDecoration: "none",
                width: "100%",
              }}
            >
              <SyncAltIcon
                sx={{
                  color: "info.main",
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="p"
                color="primary"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  textDecoration: "none",
                }}
              >
                CONVERTXPERT
              </Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              variant="text"
              color="primary"
              sx={{
                fontSize: 14,
                "&:hover": {
                  background: "#F0F0EF",
                },
              }}
            >
              {t("catalog")}
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          onClick={() => {
                            router.push(`/${locale}/shoe-size/converter`);
                          }}
                        >
                          {t("shoeSizeConverter")}
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
          {isWideScreen && <LanguageSwitcher locale={locale} />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
