Vim�UnDo� nK���.�ϢN����/Uq�.�8�XC�So�d   %   ]const UsersProfileLayout: FC<UsersProfileLayoutProps> = (props: UsersProfileLayoutProps) => {                              _�Q�    _�                        
    ����                                                                                                                                                                                                                                                                                                                                                             _�Q�     �         #      interface UsersLayoutProps {     children: any;   }       Hconst UsersLayout: FC<UsersLayoutProps> = (props: UsersLayoutProps) => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _�Q�     �                 Vconst UsersLayout: FC<UsersProfileLayoutProps> = (props: UsersProfileLayoutProps) => {     const { children } = props;     const styles = useStyles();       
  return (       <UsersHeaderFooterLayout>         <Grid container>   "        <Grid item sm={3} xs={12}>             <Menu />           </Grid>   ?        <Grid className={styles.container} item sm={9} xs={12}>   +          <Container>{children}</Container>           </Grid>         </Grid>       </UsersHeaderFooterLayout>     );   };       export default UsersLayout;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�Q�     �         #       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�Q�     �         #       5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             _�Q�    �         #      ]const UsersProfileLayout: FC<UsersProfileLayoutProps> = (props: UsersProfileLayoutProps) => {5��