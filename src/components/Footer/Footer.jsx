import React from "react";
import {IconButton} from "@material-ui/core";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons";

import Link from '@material-ui/core/Link';


import styles from './Footer.module.css';

export const Footer  = () =>{
    return(
        <div className={styles.footer}>
            <div className="container">
                <div className="row">
                    {/*column 1*/}
                    <div className="col-xs-12 col-md-2">
                        <ul className="list-unstyled">
                            <li to="/home" className={styles.a}>
                                <span className={styles.span}>PMS</span>
                            </li>
                            <li>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <FacebookIcon className={styles.icon} />
                                </IconButton>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <InstagramIcon className={styles.icon} />
                                </IconButton>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <TwitterIcon className={styles.icon} />
                                </IconButton>
                            </li>
                        </ul>
                    </div>
                        {/*column 2*/}
                    <div className="col-md-2 col-sm-6">
                        <h4>Services</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link className={styles.link} to="/">
                                    E-Learning {" "}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    Job Listing {" "}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    Coworking {" "}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/*column 3*/}
                    <div className="col-md-2 col-sm-6">
                        <h4>Contact us</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link className={styles.link} to="/">
                                    Sidebar Map {" "}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    Reach View {" "}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    Cover {" "}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/*column 4*/}
                    <div className="col-md-2 col-sm-6">
                        <h4>Singin</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link className={styles.link} to="/">
                                    Sign In {" "}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    Sign In {" "}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    Sign In {" "}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/*column 5*/}
                    <div className="col-md-2 col-sm-6">
                        <h4>Singup</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link className={styles.link} to="/signup">
                                    Sign Up {" "}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/signup">
                                    Sign Up {" "}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/signup">
                                    Sign Up {" "}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/*column 6*/}
                    <div className="col-md-2 col-sm-6" >
                        <h4>Reset Password</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link className={styles.link} to="/resetPassword">
                                    Reset password {" "}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/resetPassword">
                                    Reset password {" "}
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/resetPassword">
                                    Reset password {" "}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;