Vim�UnDo� J��1�Ц"�*�b��L�l7<\3�JH�zU�     `          <Button color="inherit" text={Config.appName || ""} onClick={() => goToUsersHome()} />   �          D       D   D   D    _��.    _�                       &    ����                                                                                                                                                                                                                                                                                                                                                             _�P3     �             &      <Box className={styles.content}>5�_�                           ����                                                                                                                                                                                                                                                                                                                                              V       _�P;     �                      <Grid container>   $          <Grid item sm={3} xs={12}>               <LeftMenu />             </Grid>   A          <Grid className={styles.container} item sm={9} xs={12}>   -            <Container>{children}</Container>             </Grid>           </Grid>5�_�                           ����                                                                                                                                                                                                                                                                                                                                              V       _�P<     �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                              V       _�P<     �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                              V       _�P=    �            &      <Box className={styles.content}>           {children}         </Box>5�_�                          ����                                                                                                                                                                                                                                                                                                                                              V       _�PL    �   j           �   Hconst UsersLayout: FC<UsersLayoutProps> = (props: UsersLayoutProps) => {     const { children } = props;     const styles = useStyles();   K  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);   	  const [       mobileMoreAnchorEl,       setMobileMoreAnchorEl   /  ] = React.useState<null | HTMLElement>(null);   4  const { goToProfile, goToRedirect } = useRoutes();   !  const dispatch = useDispatch();   @  const user = useTypedSelector((store) => store.app.auth.user);   -  const fullName = Strings.getFullName(user);   5  const avatarText = Strings.getAvatarText(fullName);       '  const isMenuOpen = Boolean(anchorEl);   7  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);       K  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {   %    setAnchorEl(event.currentTarget);     };       '  const handleMobileMenuClose = () => {        setMobileMoreAnchorEl(null);     };       !  const handleMenuClose = () => {       setAnchorEl(null);       handleMobileMenuClose();     };       J  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {   /    setMobileMoreAnchorEl(event.currentTarget);     };       $  const handleProfileClick = () => {       handleMenuClose();       goToProfile();     };       #  const handleLogoutClick = () => {       handleMenuClose();   '    dispatch(appActions.logout.call());       goToRedirect();     };       /  const menuId = "primary-search-account-menu";     const renderMenu = (   	    <Menu         anchorEl={anchorEl}   =      anchorOrigin={{ vertical: "top", horizontal: "right" }}         id={menuId}         keepMounted   @      transformOrigin={{ vertical: "top", horizontal: "right" }}         open={isMenuOpen}         onClose={handleMenuClose}       >   B      <MenuItem onClick={handleProfileClick}>Mi profile</MenuItem>   =      <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>       </Menu>     );       <  const mobileMenuId = "primary-search-account-menu-mobile";     const renderMobileMenu = (   	    <Menu   #      anchorEl={mobileMoreAnchorEl}   =      anchorOrigin={{ vertical: "top", horizontal: "right" }}         id={mobileMenuId}         keepMounted   @      transformOrigin={{ vertical: "top", horizontal: "right" }}         open={isMobileMenuOpen}   %      onClose={handleMobileMenuClose}       >         <MenuItem>   B        <IconButton aria-label="show 4 new mails" color="inherit">   4          <Badge badgeContent={4} color="secondary">               <MailIcon />             </Badge>           </IconButton>           <p>Messages</p>         </MenuItem>         <MenuItem>   K        <IconButton aria-label="show 11 new notifications" color="inherit">   5          <Badge badgeContent={11} color="secondary">   !            <NotificationsIcon />             </Badge>           </IconButton>           <p>Notifications</p>         </MenuItem>   0      <MenuItem onClick={handleProfileMenuOpen}>           <IconButton   .          aria-label="account of current user"   5          aria-controls="primary-search-account-menu"             aria-haspopup="true"             color="inherit"   	        >             <Avatar   %            className={styles.avatar}   1            alt={`${user.name} ${user.lasnName}`}   0            src={user.avatar && user.avatar.url}             >               {avatarText}             </Avatar>           </IconButton>           <p>Profile</p>         </MenuItem>       </Menu>     );       
  return (   !    <div className={styles.grow}>          <AppBar position="static">           <Toolbar>             <IconButton               edge="start"   )            className={styles.menuButton}               color="inherit"   $            aria-label="open drawer"             >               <MenuIcon />             </IconButton>   C          <Typography className={styles.title} variant="h6" noWrap>               {Config.appName}             </Typography>   )          <div className={styles.grow} />   1          <div className={styles.sectionDesktop}>   F            <IconButton aria-label="show 4 new mails" color="inherit">   8              <Badge badgeContent={4} color="secondary">                   <MailIcon />                 </Badge>               </IconButton>   O            <IconButton aria-label="show 17 new notifications" color="inherit">   9              <Badge badgeContent={17} color="secondary">   %                <NotificationsIcon />                 </Badge>               </IconButton>               <IconButton                 edge="end"   2              aria-label="account of current user"   $              aria-controls={menuId}   "              aria-haspopup="true"   -              onClick={handleProfileMenuOpen}                 color="inherit"               >                 <Avatar   )                className={styles.avatar}   5                alt={`${user.name} ${user.lasnName}`}   4                src={user.avatar && user.avatar.url}                 >                   {avatarText}                 </Avatar>               </IconButton>             </div>   0          <div className={styles.sectionMobile}>               <IconButton   $              aria-label="show more"   *              aria-controls={mobileMenuId}   "              aria-haspopup="true"   ,              onClick={handleMobileMenuOpen}                 color="inherit"               >                 <MoreIcon />               </IconButton>             </div>           </Toolbar>         </AppBar>         {renderMobileMenu}         {renderMenu}   6      <Box className={styles.content}>{children}</Box>   
    </div>     );   };       export default UsersLayout;5�_�                    g   
    ����                                                                                                                                                                                                                                                                                                                            k          k          V       _�PZ    �   f   l        interface UsersLayoutProps {     children: any;   }       Tconst UsersHeaderFooterLayout: FC<UsersLayoutProps> = (props: UsersLayoutProps) => {5�_�      	              j        ����                                                                                                                                                                                                                                                                                                                            g          g          V       _�P\     �   i   k         5�_�      
           	   j        ����                                                                                                                                                                                                                                                                                                                            g          g          V       _�P\     �   i   k         5�_�   	              
   j        ����                                                                                                                                                                                                                                                                                                                            g          g          V       _�P\     �   i   k         5�_�   
                 j        ����                                                                                                                                                                                                                                                                                                                            g          g          V       _�P]    �   j   n        lconst UsersHeaderFooterLayout: FC<UsersHeaderFooterLayoutProps> = (props: UsersHeaderFooterLayoutProps) => {5�_�                            ����                                                                                                                                                                                                                                                                                                                            g          g          V       _�Ps     �                "import LeftMenu from "./LeftMenu";5�_�                            ����                                                                                                                                                                                                                                                                                                                            f          f          V       _�Pt     �                  Grid,5�_�                           ����                                                                                                                                                                                                                                                                                                                            e          e          V       _�Pu   	 �   
               Container,5�_�                   �       ����                                                                                                                                                                                                                                                                                                                                                             _���     �   �   �        C          <Typography className={styles.title} variant="h6" noWrap>5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _���     �   �   �        8          <className={styles.title} variant="h6" noWrap>5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        ?          <Button className={styles.title} variant="h6" noWrap>5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        6          <Button ={styles.title} variant="h6" noWrap>5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        ;          <Button color={styles.title} variant="h6" noWrap>5�_�                    �   "    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        6          <Button color="inherit" variant="h6" noWrap>5�_�                    �   "    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        /          <Button color="inherit" ="h6" noWrap>5�_�                    �   "    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        -          <Button color="inherit" h6" noWrap>5�_�                    �   "    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        +          <Button color="inherit" " noWrap>5�_�                    �   "    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        )          <Button color="inherit" noWrap>5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �                  </Typography>5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �         5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �         5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             _��   
 �   �   �        #          <Button color="inherit" >               {Config.appName}             </Button>5�_�                     �       ����                                                                                                                                                                                                                                                                                                                                                             _��,     �   �   �        ;          <Button color="inherit">{Config.appName}</Button>5�_�      !               �       ����                                                                                                                                                                                                                                                                                                                                                             _��4    �            5�_�       "           !   �        ����                                                                                                                                                                                                                                                                                                                                                             _��6     �   �   �         5�_�   !   #           "   �        ����                                                                                                                                                                                                                                                                                                                                                             _��6    �   �   �         5�_�   "   $           #   �   !    ����                                                                                                                                                                                                                                                                                                                                                             _��@     �   �   �        ;          <Button color="inherit">{Config.appName}</Button>5�_�   #   %           $   �   !    ����                                                                                                                                                                                                                                                                                                                                                             _��A     �   �   �        :          <Button color="inherit"{Config.appName}</Button>5�_�   $   &           %   �   7    ����                                                                                                                                                                                                                                                                                                                                                             _��E     �   �   �        @          <Button color="inherit" text={Config.appName}</Button>5�_�   %   '           &   �   7    ����                                                                                                                                                                                                                                                                                                                                                             _��F     �   �   �        >          <Button color="inherit" text={Config.appName}Button>5�_�   &   (           '   �   7    ����                                                                                                                                                                                                                                                                                                                                                             _��G    �   �   �        8          <Button color="inherit" text={Config.appName}>5�_�   '   )           (   �        ����                                                                                                                                                                                                                                                                                                                                                             _��I     �   �   �         5�_�   (   *           )   �        ����                                                                                                                                                                                                                                                                                                                                                             _��J    �   �   �         5�_�   )   +           *   �   6    ����                                                                                                                                                                                                                                                                                                                                                             _��R     �   �   �        :          <Button color="inherit" text={Config.appName} />5�_�   *   ,           +   �        ����                                                                                                                                                                                                                                                                                                                                                             _��U     �   �   �         5�_�   +   -           ,   �        ����                                                                                                                                                                                                                                                                                                                                                             _��U    �   �   �         5�_�   ,   .           -   �   7    ����                                                                                                                                                                                                                                                                                                                                                             _��c    �   �   �        ?          <Button color="inherit" text={Config.appName | ""} />5�_�   -   /           .   �        ����                                                                                                                                                                                                                                                                                                                                                             _��e     �   �   �         5�_�   .   0           /   �        ����                                                                                                                                                                                                                                                                                                                                                             _��e    �   �   �         5�_�   /   1           0   �   >    ����                                                                                                                                                                                                                                                                                                                                                             _���     �   �   �        @          <Button color="inherit" text={Config.appName || ""} />5�_�   0   2           1   s   #    ����                                                                                                                                                                                                                                                                                                                                                             _���     �   r   t        4  const { goToProfile, goToRedirect } = useRoutes();5�_�   1   3           2   x        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   w   y         5�_�   2   4           3   x        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   w   y         5�_�   3   5           4   x        ����                                                                                                                                                                                                                                                                                                                                                             _��    �   �   �        J          <Button color="inherit" text={Config.appName || ""} onClick={}/>5�_�   4   6           5   �   G    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        K          <Button color="inherit" text={Config.appName || ""} onClick={} />5�_�   5   7           6   �   T    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        Z          <Button color="inherit" text={Config.appName || ""} onClick={goToUsersHome()} />�   �   �      5�_�   6   8           7   �   T    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        [          <Button color="inherit" text={Config.appName || ""} onClick={goToUsersHome>()} />5�_�   7   9           8   �        ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �         5�_�   8   :           9   �        ����                                                                                                                                                                                                                                                                                                                                                             _��    �   �   �         5�_�   9   ;           :   �   E    ����                                                                                                                                                                                                                                                                                                                                                             _��     �   �   �        Y        <Button color="inherit" text={Config.appName || ""} onClick={goToUsersHome>()} />5�_�   :   <           ;   �   L    ����                                                                                                                                                                                                                                                                                                                                                             _��      �   �   �        `          <Button color="inherit" text={Config.appName || ""} onClick={() =>goToUsersHome>()} />5�_�   ;   =           <   �        ����                                                                                                                                                                                                                                                                                                                                                             _��!     �   �   �         5�_�   <   >           =   �        ����                                                                                                                                                                                                                                                                                                                                                             _��!    �   �   �         5�_�   =   ?           >   �   [    ����                                                                                                                                                                                                                                                                                                                                                             _��&     �   �   �        a          <Button color="inherit" text={Config.appName || ""} onClick={() => goToUsersHome>()} />5�_�   >   @           ?   �   Z    ����                                                                                                                                                                                                                                                                                                                                                             _��'     �   �   �        `          <Button color="inherit" text={Config.appName || ""} onClick={() => goToUsersHome>)} />5�_�   ?   A           @   �   Z    ����                                                                                                                                                                                                                                                                                                                                                             _��)     �   �   �        _          <Button color="inherit" text={Config.appName || ""} onClick={() => goToUsersHome)} />5�_�   @   B           A   �   \    ����                                                                                                                                                                                                                                                                                                                                                             _��*    �   �   �        a          <Button color="inherit" text={Config.appName || ""} onClick={() => goToUsersHome())} />5�_�   A   C           B   �        ����                                                                                                                                                                                                                                                                                                                                                             _��,     �   �   �         5�_�   B   D           C   �        ����                                                                                                                                                                                                                                                                                                                                                             _��-     �   �   �         5�_�   C               D   �        ����                                                                                                                                                                                                                                                                                                                                                             _��-    �   �   �        `          <Button color="inherit" text={Config.appName || ""} onClick={() => goToUsersHome()} />5�_�                           ����                                                                                                                                                                                                                                                                                                                            d          d          V       _�Pv     �               5�_�                             ����                                                                                                                                                                                                                                                                                                                            �          �          V       _�Pv    �               5��