Vim�UnDo� ������� ����Xpft,����^~����   #                 -       -   -   -    _�QE    _�                     �   
    ����                                                                                                                                                                                                                                                                                                                                                             _�P�     �   �   �         
  return (5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _�P�     �   �   �  "          <UsersHeaderFooterLayout>�        !    5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _�P�     �   �   �  "      7    <UsersHeaderFooterLayout></UsersHeaderFooterLayout>5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _�P�     �   �   �  #          <UsersHeaderFooterLayout>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V        _�P�     �                      <Grid container>   $          <Grid item sm={3} xs={12}>               <LeftMenu />             </Grid>   A          <Grid className={styles.container} item sm={9} xs={12}>   -            <Container>{children}</Container>             </Grid>           </Grid>5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                V        _�P�     �   �   �      �   �   �      5�_�                    �        ����                                                                                                                                                                                                                                                                                                                            �             
       V       _�P�     �   �   �       =   !    <div className={styles.grow}>          <AppBar position="static">           <Toolbar>             <IconButton               edge="start"   )            className={styles.menuButton}               color="inherit"   $            aria-label="open drawer"             >               <MenuIcon />             </IconButton>   C          <Typography className={styles.title} variant="h6" noWrap>               {Config.appName}             </Typography>   )          <div className={styles.grow} />   1          <div className={styles.sectionDesktop}>   F            <IconButton aria-label="show 4 new mails" color="inherit">   8              <Badge badgeContent={4} color="secondary">                   <MailIcon />                 </Badge>               </IconButton>   O            <IconButton aria-label="show 17 new notifications" color="inherit">   9              <Badge badgeContent={17} color="secondary">   %                <NotificationsIcon />                 </Badge>               </IconButton>               <IconButton                 edge="end"   2              aria-label="account of current user"   $              aria-controls={menuId}   "              aria-haspopup="true"   -              onClick={handleProfileMenuOpen}                 color="inherit"               >                 <Avatar   )                className={styles.avatar}   5                alt={`${user.name} ${user.lasnName}`}   4                src={user.avatar && user.avatar.url}                 >                   {avatarText}                 </Avatar>               </IconButton>             </div>   0          <div className={styles.sectionMobile}>               <IconButton   $              aria-label="show more"   *              aria-controls={mobileMenuId}   "              aria-haspopup="true"   ,              onClick={handleMobileMenuOpen}                 color="inherit"               >                 <MoreIcon />               </IconButton>             </div>           </Toolbar>         </AppBar>         {renderMobileMenu}         {renderMenu}   &      <Box className={styles.content}>         </Box>   
    </div>5�_�      	              �        ����                                                                                                                                                                                                                                                                                                                            �          �   
       V       _�P�     �   �   �   �       5�_�      
           	   �        ����                                                                                                                                                                                                                                                                                                                            �          �   
       V       _�P�     �   �   �   �       5�_�   	              
   �        ����                                                                                                                                                                                                                                                                                                                            �          �   
       V       _�P�     �   �   �   �   	               <Grid container>   $          <Grid item sm={3} xs={12}>               <LeftMenu />             </Grid>   A          <Grid className={styles.container} item sm={9} xs={12}>   -            <Container>{children}</Container>             </Grid>           </Grid>5�_�   
                 �        ����                                                                                                                                                                                                                                                                                                                            �           �           V        _�P�     �   �   �       @       /  const menuId = "primary-search-account-menu";     const renderMenu = (   	    <Menu         anchorEl={anchorEl}   =      anchorOrigin={{ vertical: "top", horizontal: "right" }}         id={menuId}         keepMounted   @      transformOrigin={{ vertical: "top", horizontal: "right" }}         open={isMenuOpen}         onClose={handleMenuClose}       >   B      <MenuItem onClick={handleProfileClick}>Mi profile</MenuItem>   =      <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>       </Menu>     );       <  const mobileMenuId = "primary-search-account-menu-mobile";     const renderMobileMenu = (   	    <Menu   #      anchorEl={mobileMoreAnchorEl}   =      anchorOrigin={{ vertical: "top", horizontal: "right" }}         id={mobileMenuId}         keepMounted   @      transformOrigin={{ vertical: "top", horizontal: "right" }}         open={isMobileMenuOpen}   %      onClose={handleMobileMenuClose}       >         <MenuItem>   B        <IconButton aria-label="show 4 new mails" color="inherit">   4          <Badge badgeContent={4} color="secondary">               <MailIcon />             </Badge>           </IconButton>           <p>Messages</p>         </MenuItem>         <MenuItem>   K        <IconButton aria-label="show 11 new notifications" color="inherit">   5          <Badge badgeContent={11} color="secondary">   !            <NotificationsIcon />             </Badge>           </IconButton>           <p>Notifications</p>         </MenuItem>   0      <MenuItem onClick={handleProfileMenuOpen}>           <IconButton   .          aria-label="account of current user"   5          aria-controls="primary-search-account-menu"             aria-haspopup="true"             color="inherit"   	        >             <Avatar   %            className={styles.avatar}   1            alt={`${user.name} ${user.lasnName}`}   0            src={user.avatar && user.avatar.url}             >               {avatarText}             </Avatar>           </IconButton>           <p>Profile</p>         </MenuItem>       </Menu>     );    5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �           �           V        _�P�    �   �   �   �        };5�_�                    o        ����                                                                                                                                                                                                                                                                                                                            o   	       �           V   	    _�P�     �   n   o       *   K  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);   	  const [       mobileMoreAnchorEl,       setMobileMoreAnchorEl   /  ] = React.useState<null | HTMLElement>(null);   4  const { goToProfile, goToRedirect } = useRoutes();   !  const dispatch = useDispatch();   @  const user = useTypedSelector((store) => store.app.auth.user);   -  const fullName = Strings.getFullName(user);   5  const avatarText = Strings.getAvatarText(fullName);       '  const isMenuOpen = Boolean(anchorEl);   7  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);       K  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {   %    setAnchorEl(event.currentTarget);     };       '  const handleMobileMenuClose = () => {        setMobileMoreAnchorEl(null);     };       !  const handleMenuClose = () => {       setAnchorEl(null);       handleMobileMenuClose();     };       J  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {   /    setMobileMoreAnchorEl(event.currentTarget);     };       $  const handleProfileClick = () => {       handleMenuClose();       goToProfile();     };       #  const handleLogoutClick = () => {       handleMenuClose();   '    dispatch(appActions.logout.call());       goToRedirect();     };    5�_�                    n       ����                                                                                                                                                                                                                                                                                                                            o   	       o           V   	    _�P�     �   m   p   }        const styles = useStyles();5�_�                    o        ����                                                                                                                                                                                                                                                                                                                            p   	       p           V   	    _�P�     �   n   p   ~       5�_�                    o        ����                                                                                                                                                                                                                                                                                                                            p   	       p           V   	    _�P�    �   n   p   ~       5�_�                           ����                                                                                                                                                                                                                                                                                                                            ^                    V       _�P�     �             @   	  grow: {       flexGrow: 1     },     menuButton: {   !    marginRight: theme.spacing(2)     },   
  title: {       display: "none",   #    [theme.breakpoints.up("sm")]: {         display: "block"       }     },     search: {       position: "relative",   +    borderRadius: theme.shape.borderRadius,   <    backgroundColor: fade(theme.palette.common.white, 0.15),       "&:hover": {   =      backgroundColor: fade(theme.palette.common.white, 0.25)       },   "    marginRight: theme.spacing(2),       marginLeft: 0,       width: "100%",   #    [theme.breakpoints.up("sm")]: {   #      marginLeft: theme.spacing(3),         width: "auto"       }     },     searchIcon: {   !    padding: theme.spacing(0, 2),       height: "100%",       position: "absolute",       pointerEvents: "none",       display: "flex",       alignItems: "center",       justifyContent: "center"     },     inputRoot: {       color: "inherit"     },     inputInput: {   '    padding: theme.spacing(1, 1, 1, 0),   3    // vertical padding + font size from searchIcon   5    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,   2    transition: theme.transitions.create("width"),       width: "100%",   #    [theme.breakpoints.up("md")]: {         width: "20ch"       }     },     sectionDesktop: {       display: "none",   #    [theme.breakpoints.up("md")]: {         display: "flex"       }     },     sectionMobile: {       display: "flex",   #    [theme.breakpoints.up("md")]: {         display: "none"       }     },     content: {       minHeight: "100vh"     },5�_�                    "        ����                                                                                                                                                                                                                                                                                                                            "          %          V       _�P�     �   !   "            avatar: {       width: theme.spacing(4),       height: theme.spacing(4)     }5�_�                    #        ����                                                                                                                                                                                                                                                                                                                            "          "          V       _�P�     �   "   $   :       5�_�                    #        ����                                                                                                                                                                                                                                                                                                                            "          "          V       _�P�     �   "   $   :       5�_�                    #        ����                                                                                                                                                                                                                                                                                                                            "          "          V       _�P�    �       "   :        },5�_�                            ����                                                                                                                                                                                                                                                                                                                                       
           V        _�Q     �                	  AppBar,   
  Toolbar,     IconButton,     Typography,     Badge,     MenuItem,     Menu,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �                  Box,5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �   	      2       5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �   	      2       5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q    �         2      import {     Container,     Grid,     Avatar   } from "@material-ui/core";5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �         .      <import { fade, makeStyles } from "@material-ui/core/styles";5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �         .      8import { , makeStyles } from "@material-ui/core/styles";5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �         .      7import {  makeStyles } from "@material-ui/core/styles";5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �         .      <import { Container, Grid, Avatar } from "@material-ui/core";5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �         .      :import { Container, GridAvatar } from "@material-ui/core";5�_�      !                       ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �                %import Config from "../../../config";5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �         -       5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �         -       5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q    �         -      3import { Container, Grid} from "@material-ui/core";5�_�   #   %           $           ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �                "import LeftMenu from "./LeftMenu";       /import MenuIcon from "@material-ui/icons/Menu";   /import MailIcon from "@material-ui/icons/Mail";   Aimport NotificationsIcon from "@material-ui/icons/Notifications";   3import MoreIcon from "@material-ui/icons/MoreVert";   6import useRoutes from "../../../core/hooks/useRoutes";   *import { useDispatch } from "react-redux";   8import { appActions } from "../../../redux/app/actions";   Jimport { useTypedSelector } from "../../../core/hooks/use_typed_selector";   -import Strings from "../../../utils/strings";5�_�   $   &           %           ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �         "       5�_�   %   (           &           ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q   	 �         "       5�_�   &   )   '       (          ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q5     �         "                <LeftMenu />5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q8     �         "                <Menu />5�_�   )   ,           *          ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q@     �         "    5�_�   *   -   +       ,           ����                                                                                                                                                                                                                                                                                                                                                  V        _�QD     �         #       5�_�   ,               -           ����                                                                                                                                                                                                                                                                                                                                                  V        _�QD    �         #       5�_�   *           ,   +          ����                                                                                                                                                                                                                                                                                                                                                  V        _�QA     �         #    �         #                <MenLeftMenuu />5�_�   &           (   '          ����                                                                                                                                                                                                                                                                                                                                                  V        _�Q     �         "                <LeftMenuItem />5��