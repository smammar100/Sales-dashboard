import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GradientText from './GradientText';
interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const Ellipse = ({
  color = 'rgba(241, 241, 241, 1)',
  style,
  index = 0
}: {
  color?: string;
  style?: React.CSSProperties;
  index?: number;
}) => <motion.div initial={{
  scale: 0.96,
  opacity: 0
}} animate={{
  scale: 1,
  opacity: 1
}} transition={{
  delay: 0.2 + index * 0.001,
  duration: 0.15,
  ease: "easeOut"
}} whileHover={{
  scale: 1.05,
  transition: {
    duration: 0.2
  }
}} style={{
  width: '16.4px',
  height: '16.4px',
  backgroundColor: color,
  boxSizing: 'border-box',
  borderRadius: '50%',
  ...style
}} />;
const Shape = ({
  color,
  index = 0
}: {
  color: string;
  index?: number;
}) => <motion.div initial={{
  scaleY: 0,
  opacity: 0
}} animate={{
  scaleY: 1,
  opacity: 1
}} transition={{
  delay: 0.25 + index * 0.01,
  duration: 0.2,
  ease: "easeOut"
}} whileHover={{
  scaleY: 1.05,
  transition: {
    duration: 0.2
  }
}} style={{
  width: '4px',
  height: '28px',
  backgroundColor: color,
  boxSizing: 'border-box',
  transformOrigin: 'bottom'
}} />;
const IconButton = ({
  src,
  alt,
  style
}: {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}) => <motion.button whileHover={{
  scale: 1.02,
  y: 0,
  backgroundColor: 'rgba(55, 55, 57, 1)'
}} whileTap={{
  scale: 0.98
}} transition={{
  duration: 0.2
}} style={{
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(45, 45, 47, 1)',
  borderColor: 'rgba(20, 20, 20, 0.3)',
  borderStyle: 'solid',
  borderWidth: '1.5px',
  boxSizing: 'border-box',
  boxShadow: '0px 7px 16px -5px rgba(0, 0, 0, 0.35), 0px 0px 0px 2px rgba(0, 0, 0, 0.17), inset 0px 2px 2px -1px rgba(255, 255, 255, 0.27)',
  borderRadius: '8px',
  cursor: 'pointer',
  padding: 0,
  ...style
}}>
    <img src={src} alt={alt} style={{
    width: '16px',
    height: '16px'
  }} />
  </motion.button>;
const ActionButton = ({
  children,
  style
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => <motion.button whileHover={{
  scale: 1.01,
  backgroundColor: 'rgba(55, 55, 57, 1)'
}} whileTap={{
  scale: 0.99
}} transition={{
  duration: 0.2
}} style={{
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(45, 45, 47, 1)',
  borderColor: 'rgba(20, 20, 20, 0.3)',
  borderStyle: 'solid',
  borderWidth: '1.5px',
  boxSizing: 'border-box',
  boxShadow: '0px 7px 16px -5px rgba(0, 0, 0, 0.35), 0px 0px 0px 2px rgba(0, 0, 0, 0.17), inset 0px 2px 2px -1px rgba(255, 255, 255, 0.27)',
  borderRadius: '8px',
  color: 'rgba(255, 255, 255, 1)',
  fontSize: '14px',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 600,
  cursor: 'pointer',
  ...style,
  width: "100%",
  maxWidth: "100%"
}}>
    {children}
  </motion.button>;
const NavItem = ({
  icon,
  label,
  active = false,
  badge,
  index = 0
}: {
  icon: string;
  label: string;
  active?: boolean;
  badge?: string;
  index?: number;
}) => <motion.button initial={{
  opacity: 0,
  x: -6
}} animate={{
  opacity: 1,
  x: 0
}} transition={{
  delay: 0.05 + index * 0.02,
  duration: 0.25
}} whileHover={{
  scale: 1.01,
  backgroundColor: active ? 'rgba(43, 42, 45, 1)' : 'rgba(255, 255, 255, 0.05)'
}} whileTap={{
  scale: 0.99
}} style={{
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: active ? '10px 12px' : '8px 12px',
  gap: '8px',
  backgroundColor: active ? 'rgba(43, 42, 45, 1)' : 'transparent',
  backgroundImage: active ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.08) 97%)' : 'none',
  borderColor: active ? 'rgba(38, 37, 40, 1)' : 'transparent',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '8px',
  boxShadow: active ? '0px 0px 0px 1px rgba(10, 10, 10, 1)' : 'none',
  cursor: 'pointer',
  border: active ? '1px solid rgba(38, 37, 40, 1)' : 'none',
  textAlign: 'left'
}}>
    <motion.img src={icon} alt="" style={{
    width: '16px',
    height: '16px'
  }} whileHover={{
    rotate: 18
  }} transition={{
    duration: 0.2
  }} />
    {label === 'AI Assistant' ? <div style={{
    flexGrow: 1
  }}>
        <GradientText colors={["#fc00ff", "#00dbde"]} animationSpeed={7} showBorder={false} className="custom-class">
          {label}
        </GradientText>
      </div> : <span style={{
    flexGrow: 1,
    color: active ? 'rgba(255, 255, 255, 1)' : 'rgba(115, 118, 123, 1)',
    fontSize: '14px',
    fontFamily: '"Inter", sans-serif',
    fontWeight: active ? 600 : 500,
    width: "140.117px",
    maxWidth: "140.117px"
  }}>{label}</span>}
    {badge && <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    delay: 0.15 + index * 0.02,
    duration: 0.2,
    ease: "easeOut"
  }} whileHover={{
    scale: 1.02
  }} style={{
    padding: '2px 6px',
    backgroundColor: 'rgba(235, 247, 255, 1)',
    border: '1px solid rgba(204, 236, 255, 1)',
    borderRadius: '100px',
    paddingRight: "6px",
    paddingLeft: "6px",
    paddingBottom: "2px",
    height: "18px",
    minHeight: "auto",
    width: "38px",
    maxWidth: "38px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
        <span style={{
      color: 'rgba(0, 160, 255, 1)',
      fontSize: '10px',
      fontWeight: 500
    }}>{badge}</span>
      </motion.div>}
  </motion.button>;
export const ThemeToggle = () => {
  const [searchValue, setSearchValue] = useState('');
  const colors = {
    bg: 'rgba(22, 22, 24, 1)',
    card: 'rgba(28, 28, 30, 1)',
    text: 'rgba(255, 255, 255, 1)',
    secondaryText: 'rgba(115, 118, 123, 1)',
    blue: 'rgba(0, 160, 255, 1)',
    lightBlue: 'rgba(128, 208, 255, 1)',
    paleBlue: 'rgba(204, 236, 255, 1)',
    border: 'rgba(44, 44, 44, 1)'
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 8
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25
      }
    }
  };
  return <div style={{
    width: '100%',
    minHeight: '100vh',
    backgroundColor: colors.bg,
    display: 'flex',
    position: 'relative',
    fontFamily: '"Inter", sans-serif',
    overflow: 'auto'
  }}>
      {/* Sidebar */}
      <motion.aside initial={{
      x: -24,
      opacity: 0
    }} animate={{
      x: 0,
      opacity: 1
    }} transition={{
      duration: 0.25,
      ease: "easeOut"
    }} style={{
      width: '280px',
      minWidth: '280px',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      gap: '24px',
      backgroundColor: colors.bg,
      borderRight: `1px solid ${colors.border}`,
      minHeight: '100vh',
      boxSizing: 'border-box',
      flexShrink: 0
    }}>
        <motion.div initial={{
        opacity: 0,
        y: -8
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1,
        duration: 0.25
      }} style={{
        display: 'flex',
        width: "100%",
        maxWidth: "100%",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/8847557c-9a3d-41a3-872c-fea60fa85e11.svg" alt="Logo" style={{
          width: '166px'
        }} />
          <motion.button whileHover={{
          rotate: 45
        }} transition={{
          duration: 0.2
        }} style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          paddingLeft: "16px"
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/6fa43d8d-da4f-4d29-be59-386ec56795db.svg" alt="Toggle" style={{
            width: "24px",
            maxWidth: "24px",
            height: "24px"
          }} />
          </motion.button>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.98
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.15,
        duration: 0.25
      }} style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        gap: '12px',
        backgroundColor: 'rgba(28, 28, 30, 1)',
        border: '1px solid rgba(44, 44, 44, 0.9)',
        borderRadius: '8px'
      }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/d8317c3c-d734-472a-ae08-70a3eccb71a7.svg" alt="Search" />
          <input type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)} style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: colors.text,
          fontSize: '14px',
          outline: 'none',
          width: '100%'
        }} />
          <div style={{
          display: 'flex',
          gap: '2px',
          backgroundColor: 'rgba(43, 43, 43, 1)',
          padding: '2px 6px',
          borderRadius: '4px',
          width: "fit-content",
          maxWidth: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "10px",
          background: "rgb(43 43 43 / 0)"
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/d55495e9-ce53-42d8-bc99-40235f6404b9.svg" alt="cmd" />
            <span style={{
            color: 'rgba(134, 140, 152, 1)',
            fontSize: '14px'
          }}>K</span>
          </div>
        </motion.div>

        <nav style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <div>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.1
          }} style={{
            color: colors.secondaryText,
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '1.2px',
            padding: '0 12px 8px'
          }}>
              MAIN MENU
            </motion.div>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
          }}>
              <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/1199aef9-1446-431c-be8a-42c1af86ffe5.svg" label="AI Assistant" badge="NEW" index={0} />
              <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/5d43e5d8-f64c-47f9-8d15-a9cedce30912.svg" label="Dashboard" index={1} />
              <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/45ca5147-2742-4800-8f8b-f473f913fd8d.svg" label="Inventory" index={2} />
              <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/22c1571e-44a1-459a-b7e9-67a39be2e6e9.svg" label="Orders" index={3} />
              <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/abd28518-43b3-4367-ae68-e92867f9ff76.svg" label="Customers" index={4} />
              <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/2926dbf2-6ff5-439c-935d-613df11fa6d3.svg" label="Discounts" index={5} />
            </div>
          </div>

          <div>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.1
          }} style={{
            color: colors.secondaryText,
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '1.2px',
            padding: '0 12px 8px'
          }}>
              TOOLS
            </motion.div>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
          }}>
              <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/8d2db438-d46f-4854-bc70-a0b5b0c74f9f.svg" label="Integrations" index={6} />
              <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/d01d8cc9-c8a0-4c76-ba2b-d401c2ea3330.svg" label="Automation" index={7} />
              <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/10c5d34c-0c43-4d48-a849-6a69c92cd759.svg" label="Reports & Analytics" active index={8} />
            </div>
          </div>
        </nav>

        <div style={{
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <div>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.1
          }} style={{
            color: colors.secondaryText,
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '1.2px',
            padding: '0 12px 8px'
          }}>
              SUPPORT
            </motion.div>
            <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/a6971c11-c3e6-43e4-b585-ae4c00f06358.svg" label="Settings" index={9} />
            <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/dbe13c7c-9003-4892-aee1-c0c1ca17c2ca.svg" label="Give Feedback" index={10} />
            <NavItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/9a981cca-ec92-4ad1-a670-30f033d2b4eb.svg" label="Help Center" index={11} />
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 8
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.25
        }} whileHover={{
          scale: 1.01
        }} style={{
          backgroundColor: 'rgba(33, 33, 35, 1)',
          backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.1) 100%)',
          borderRadius: '12px',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0px 8px 10px -3px rgba(0, 0, 0, 0.3), 0px 0px 0px 2px rgba(0, 0, 0, 0.25)',
          border: '1.5px solid rgba(255,255,255,0.05)'
        }}>
            <motion.button whileHover={{
            scale: 1.1,
            rotate: 90
          }} transition={{
            duration: 0.2
          }} style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            opacity: 0.5
          }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/f33cf26a-cdb0-4f46-bb02-d0372f2cbf09.svg" alt="Close" />
            </motion.button>
            <motion.div whileHover={{
            rotate: [0, -10, 10, -10, 0]
          }} transition={{
            duration: 0.5
          }} style={{
            width: '36px',
            height: '36px',
            borderRadius: '5px',
            marginBottom: '24px',
            boxShadow: 'none',
            opacity: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}>
              <img src="/processor-icon.png" alt="" style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} />
            </motion.div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginBottom: '4px'
          }}>
              <span style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: 500
            }}>Upgrade to pro</span>
              <motion.img animate={{
              x: [0, 4, 0]
            }} transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }} src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/d4e9b429-63b5-46c2-947e-fa7cc157a5e8.svg" alt="" />
            </div>
            <p style={{
            color: 'rgba(133, 133, 133, 1)',
            fontSize: '11px',
            margin: 0
          }}>
              Upgrade and Unlock all features now
            </p>
          </motion.div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <motion.main initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.15,
      duration: 0.3
    }} style={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      padding: '16px',
      boxSizing: 'border-box',
      overflowY: 'auto',
      minHeight: '100vh',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      width: 0
    }} className="hide-scrollbar">
        <motion.div initial={{
        y: 8,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.2,
        duration: 0.25
      }} style={{
        backgroundColor: 'rgba(28, 28, 30, 1)',
        borderRadius: '10px',
        border: '1px solid rgba(44, 44, 44, 1)',
        boxShadow: '0px 0px 1px 1.5px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden'
      }}>
          {/* Header */}
          <motion.header initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.25
        }} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 20px',
          backgroundColor: 'rgba(27, 27, 29, 1)',
          borderBottom: '1px solid rgba(44, 44, 44, 1)'
        }}>
            <motion.h1 initial={{
            x: -8,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} transition={{
            delay: 0.3
          }} style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 600,
            margin: 0
          }}>
              Reports & Analytics
            </motion.h1>
            <motion.div initial={{
            x: 8,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} transition={{
            delay: 0.3
          }} style={{
            display: 'flex',
            gap: '8px'
          }}>
              <IconButton src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/b1e79e53-a0f8-440f-bb65-36d8cf02f2ec.svg" alt="Notifications" />
              <IconButton src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/89fec11b-e3df-46be-a1cc-63801cdb2471.svg" alt="Messages" />
              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} transition={{
              duration: 0.2
            }} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '0 12px',
              height: '40px',
              background: 'linear-gradient(180deg, #1AAAFF 0%, #71DCFD 37%, #1BB8FC 63%, #2DC3FD 100%)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/b9938c40-d155-4a34-8e9d-bd0f64285c5b.svg" alt="" />
                Add Widget
              </motion.button>
            </motion.div>
          </motion.header>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            {/* Top Row: Summary Cards */}
            <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
              {[{
              title: 'Monthly Average',
              amount: '$19,460',
              change: '+$3,087',
              percent: '+1.8%',
              type: 'vs. last month'
            }, {
              title: 'Total Sales',
              amount: '$255,180',
              change: '+$14,665',
              percent: '+3.8%',
              type: 'vs. last year'
            }].map((card, i) => <motion.div key={i} variants={itemVariants} whileHover={{
              y: -2,
              boxShadow: '0px 4px 16px -2px rgba(0, 160, 255, 0.15)'
            }} transition={{
              duration: 0.2
            }} style={{
              flex: 1,
              minWidth: '280px',
              backgroundColor: 'rgba(255, 255, 255, 0.025)',
              border: '1.5px solid rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              boxShadow: '0px 0px 0px 2px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}>
                  <div style={{
                padding: '16px'
              }}>
                    <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginBottom: '4px'
                }}>
                      <span style={{
                    color: colors.secondaryText,
                    fontSize: '14px'
                  }}>{card.title}</span>
                      <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/26a76260-6524-4453-b537-caccd0a2e92e.svg" alt="" />
                    </div>
                    <motion.div initial={{
                  scale: 0.98,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} transition={{
                  delay: 0.3 + i * 0.04,
                  duration: 0.2,
                  ease: "easeOut"
                }} style={{
                  color: 'rgba(246, 248, 250, 1)',
                  fontSize: '24px',
                  fontWeight: 600,
                  fontFamily: '"Geist Mono", monospace'
                }}>
                      {card.amount}
                    </motion.div>
                  </div>
                  <div style={{
                height: '1px',
                backgroundColor: 'rgba(26, 26, 26, 1)'
              }} />
                  <div style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                    <span style={{
                  color: 'rgba(246, 248, 250, 1)',
                  fontSize: '14px',
                  fontFamily: '"Geist Mono", monospace'
                }}>{card.change}</span>
                    <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.35 + i * 0.04,
                  duration: 0.2,
                  ease: "easeOut"
                }} whileHover={{
                  scale: 1.02
                }} style={{
                  backgroundColor: 'rgba(239, 254, 250, 1)',
                  border: '1px solid rgba(64, 196, 170, 0.2)',
                  padding: '2px 4px',
                  borderRadius: '6px'
                }}>
                      <span style={{
                    color: 'rgba(40, 127, 110, 1)',
                    fontSize: '12px',
                    fontWeight: 700
                  }}>{card.percent}</span>
                    </motion.div>
                    <span style={{
                  color: colors.secondaryText,
                  fontSize: '14px'
                }}>{card.type}</span>
                  </div>
                </motion.div>)}
            </div>

            {/* Second Row: Detailed Charts */}
            <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
              {/* Total Visitor Chart */}
              <motion.div variants={itemVariants} whileHover={{
              y: -2,
              boxShadow: '0px 4px 16px -2px rgba(0, 160, 255, 0.12)'
            }} style={{
              flex: 1,
              minWidth: '320px',
              backgroundColor: 'rgba(255, 255, 255, 0.025)',
              border: '1.5px solid rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
                <div>
                  <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginBottom: '4px'
                }}>
                    <span style={{
                    color: colors.secondaryText,
                    fontSize: '14px'
                  }}>Total Visitor</span>
                    <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/e6845f15-2248-4604-a30c-50b9337271c9.svg" alt="" />
                  </div>
                  <motion.div initial={{
                  scale: 0.98,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} transition={{
                  delay: 0.4,
                  duration: 0.2,
                  ease: "easeOut"
                }} style={{
                  color: 'rgba(246, 248, 250, 1)',
                  fontSize: '24px',
                  fontWeight: 600,
                  fontFamily: '"Geist Mono", monospace'
                }}>
                    87,141
                  </motion.div>
                </div>
                
                <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: "1.5px",
                width: "100%",
                maxWidth: "100%"
              }}>
                  {Array.from({
                  length: 200
                }).map((_, i) => {
                  let color = 'rgba(241, 241, 241, 1)';
                  if (i > 80) color = colors.lightBlue;
                  if (i > 140) color = colors.blue;
                  if (i > 180) color = 'white';
                  return <Ellipse key={i} color={color} index={i} />;
                })}
                </div>

                <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: colors.secondaryText,
                fontSize: '14px'
              }}>
                  <span>Jan</span>
                  <span>Dec</span>
                </div>

                <div style={{
                display: 'flex',
                gap: '4px'
              }}>
                  {[0, 1, 2].map(idx => <motion.div key={idx} initial={{
                  scaleX: 0
                }} animate={{
                  scaleX: 1
                }} transition={{
                  delay: 0.45 + idx * 0.04,
                  duration: 0.25
                }} style={{
                  flex: 1,
                  height: '8px',
                  backgroundColor: idx === 0 ? '#FAFAFA' : idx === 1 ? colors.blue : colors.lightBlue,
                  borderRadius: '100px',
                  transformOrigin: 'left'
                }} />)}
                </div>
                <div style={{
                height: '1px',
                backgroundColor: 'rgba(26, 26, 26, 1)'
              }} />
                <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: colors.secondaryText,
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif'
              }}>
                  <span style={{
                  flex: 1
                }}>0</span>
                  <span style={{
                  flex: 1
                }}>500</span>
                  <span style={{
                  flex: 1
                }}>1K</span>
                </div>
                <ActionButton>View Details</ActionButton>
              </motion.div>

              {/* Conversion Rate Funnel */}
              <motion.div variants={itemVariants} whileHover={{
              y: -2,
              boxShadow: '0px 4px 16px -2px rgba(0, 160, 255, 0.12)'
            }} style={{
              flex: 1,
              minWidth: '320px',
              backgroundColor: 'rgba(255, 255, 255, 0.025)',
              border: '1.5px solid rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
                <div>
                  <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginBottom: '4px'
                }}>
                    <span style={{
                    color: colors.secondaryText,
                    fontSize: '14px'
                  }}>Conversion Rate</span>
                    <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/c499fb13-49f7-48c0-b620-3c55d594e00d.svg" alt="" />
                  </div>
                  <motion.div initial={{
                  scale: 0.98,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} transition={{
                  delay: 0.45,
                  duration: 0.2,
                  ease: "easeOut"
                }} style={{
                  color: 'rgba(246, 248, 250, 1)',
                  fontSize: '24px',
                  fontWeight: 600,
                  fontFamily: '"Geist Mono", monospace'
                }}>
                    8.9%
                  </motion.div>
                </div>

                <motion.div initial={{
                opacity: 0,
                x: -8
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.5
              }} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                borderBottom: '1px solid rgba(26, 26, 26, 1)',
                paddingBottom: '8px'
              }}>
                  <div>
                    <div style={{
                    color: 'rgba(250, 250, 250, 1)',
                    fontSize: '16px',
                    fontWeight: 600
                  }}>Conversion funnel</div>
                    <div style={{
                    color: colors.secondaryText,
                    fontSize: '14px'
                  }}>Sessions</div>
                  </div>
                  <span style={{
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: '"Geist Mono", monospace'
                }}>24,400</span>
                </motion.div>

                {[{
                label: 'Added to cart',
                val: '8,420',
                percent: '34.5%'
              }, {
                label: 'Reached checkout',
                val: '5,230',
                percent: '21.4%'
              }, {
                label: 'Sessions converted',
                val: '2,180',
                percent: '8.9%'
              }].map((item, idx) => <React.Fragment key={idx}>
                    <motion.div initial={{
                  opacity: 0,
                  x: -8
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.5 + idx * 0.04
                }} whileHover={{
                  x: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.02)'
                }} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '4px 0',
                  borderRadius: '4px'
                }}>
                      <div>
                        <div style={{
                      color: 'rgba(250, 250, 250, 1)',
                      fontSize: '16px',
                      fontWeight: 500
                    }}>{item.label}</div>
                        <div style={{
                      display: 'flex',
                      gap: '4px',
                      alignItems: 'center'
                    }}>
                          <span style={{
                        color: 'white',
                        fontSize: '14px',
                        fontFamily: '"Geist Mono", monospace'
                      }}>{item.val}</span>
                          <span style={{
                        color: colors.secondaryText,
                        fontSize: '14px'
                      }}>sessions</span>
                        </div>
                      </div>
                      <span style={{
                    color: 'white',
                    fontSize: '16px',
                    fontFamily: '"Geist Mono", monospace'
                  }}>{item.percent}</span>
                    </motion.div>
                    {idx < 2 && <div style={{
                  height: '1px',
                  backgroundColor: 'rgba(26, 26, 26, 1)'
                }} />}
                  </React.Fragment>)}
                <div style={{
                marginTop: 'auto'
              }}>
                  <ActionButton>View Details</ActionButton>
                </div>
              </motion.div>

              {/* Total Stock & Promo */}
              <div style={{
              flex: 1,
              minWidth: '280px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
                <motion.div variants={itemVariants} whileHover={{
                y: -2,
                boxShadow: '0px 4px 16px -2px rgba(0, 160, 255, 0.12)'
              }} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1.5px solid rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                  <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                    <span style={{
                    color: colors.secondaryText,
                    fontSize: '14px'
                  }}>Total Stock</span>
                    <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/55a743fd-4b90-4c96-bf8d-77b33db274b0.svg" alt="" />
                  </div>
                  <motion.div initial={{
                  scale: 0.98,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} transition={{
                  delay: 0.5,
                  duration: 0.2,
                  ease: "easeOut"
                }} style={{
                  color: 'rgba(246, 248, 250, 1)',
                  fontSize: '24px',
                  fontWeight: 600,
                  fontFamily: '"Geist Mono", monospace'
                }}>
                    15,079
                  </motion.div>
                  
                  <div style={{
                  height: '1px',
                  backgroundColor: 'rgba(26, 26, 26, 1)'
                }} />
                  
                  <div style={{
                  display: 'flex',
                  gap: '4px'
                }}>
                    {Array.from({
                    length: 40
                  }).map((_, i) => <Shape key={i} color={i < 24 ? colors.blue : i < 32 ? colors.lightBlue : colors.paleBlue} index={i} />)}
                  </div>
                  
                  <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                    <div style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center'
                  }}>
                      <span style={{
                      color: colors.secondaryText,
                      fontSize: '14px'
                    }}>Total capacity:</span>
                      <span style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: '"Geist Mono", monospace'
                    }}>20,000</span>
                    </div>
                    <motion.button whileHover={{
                    x: 2,
                    color: colors.lightBlue
                  }} transition={{
                    duration: 0.2
                  }} style={{
                    color: colors.blue,
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}>
                      Edit inventory
                      <motion.img animate={{
                      x: [0, 2, 0]
                    }} transition={{
                      repeat: Infinity,
                      duration: 2
                    }} src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/3ef975b8-cf0b-4781-bbd9-ee78818e6993.svg" alt="" />
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{
                scale: 1.01,
                boxShadow: '0px 6px 20px -2px rgba(26, 170, 255, 0.2)'
              }} transition={{
                duration: 0.2
              }} style={{
                flex: 1,
                background: 'linear-gradient(180deg, #1AAAFF 0%, #71DCFD 37%, #1BB8FC 63%, #2DC3FD 100%)',
                borderRadius: '10px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                  <motion.div initial={{
                  opacity: 0,
                  y: -4
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.55
                }}>
                    <div style={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 600
                  }}>Want grow faster?</div>
                    <div style={{
                    color: 'rgba(250, 250, 250, 1)',
                    fontSize: '14px'
                  }}>Upgrade your performance.</div>
                  </motion.div>
                  <motion.div initial={{
                  opacity: 0,
                  scale: 0.98
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  delay: 0.6,
                  duration: 0.2,
                  ease: "easeOut"
                }} style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '4px',
                  alignSelf: 'flex-end'
                }}>
                    <span style={{
                    color: 'white',
                    fontSize: '48px',
                    fontWeight: 600,
                    fontFamily: '"Geist Mono", monospace'
                  }}>$19</span>
                    <span style={{
                    color: 'white',
                    fontSize: '21px'
                  }}>/ mo</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Table: Cost of The Year */}
            <motion.div variants={itemVariants} whileHover={{
            y: -2,
            boxShadow: '0px 4px 16px -2px rgba(0, 160, 255, 0.12)'
          }} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1.5px solid rgba(42, 42, 44, 0.6)',
            borderRadius: '8px',
            overflow: 'auto',
            minWidth: '600px'
          }}>
              <motion.div initial={{
              opacity: 0,
              y: -4
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} style={{
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              borderBottom: '1px solid rgba(20, 20, 20, 1)'
            }}>
                <span style={{
                color: 'rgba(250, 250, 250, 1)',
                fontSize: '18px',
                fontWeight: 600
              }}>Cost of The Year</span>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/279652715016097792/figma-assets/f6ee8a55-f40f-4457-8215-3f522ff0e5ba.svg" alt="" />
              </motion.div>
              <div style={{
              display: 'flex'
            }}>
                {['Month', 'Marketing', 'Operations', 'Sales'].map((header, hIdx) => <div key={header} style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                    <motion.div initial={{
                  opacity: 0,
                  y: -4
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.65 + hIdx * 0.03
                }} style={{
                  backgroundColor: 'rgba(44, 44, 47, 1)',
                  padding: '12px 16px',
                  color: colors.secondaryText,
                  fontSize: '10px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  textAlign: hIdx === 0 ? 'left' : 'right',
                  borderBottom: '1px solid rgba(20, 20, 20, 1)',
                  borderRight: hIdx < 3 ? '1px solid rgba(20, 20, 20, 1)' : 'none'
                }}>
                      {header}
                    </motion.div>
                    {[{
                  m: 'January',
                  c1: '$5,000',
                  c2: '$5,400',
                  c3: '$7,500'
                }, {
                  m: 'February',
                  c1: '$3,200',
                  c2: '$6,200',
                  c3: '$8,700'
                }, {
                  m: 'March',
                  c1: '$4,100',
                  c2: '$4,350',
                  c3: '$6,600'
                }, {
                  m: 'April',
                  c1: '$5,000',
                  c2: '$6,900',
                  c3: '$7,520'
                }, {
                  m: 'May',
                  c1: '$3,600',
                  c2: '$6,550',
                  c3: '$7,430'
                }, {
                  m: 'June',
                  c1: '$5,300',
                  c2: '$4,950',
                  c3: '$5,950'
                }, {
                  m: 'August',
                  c1: '$5,150',
                  c2: '$6,000',
                  c3: '$7,710'
                }].map((row, rIdx) => <motion.div key={rIdx} initial={{
                  opacity: 0,
                  x: -4
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.7 + rIdx * 0.03
                }} whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  x: 1
                }} style={{
                  padding: '12px 16px',
                  display: 'flex',
                  justifyContent: hIdx === 0 ? 'flex-start' : 'flex-end',
                  color: hIdx === 0 ? 'rgba(250, 250, 250, 0.98)' : 'white',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: hIdx === 0 ? '"Inter", sans-serif' : '"Geist Mono", monospace',
                  borderBottom: '1px solid rgba(20, 20, 20, 1)',
                  borderRight: hIdx < 3 ? '1px solid rgba(20, 20, 20, 1)' : 'none'
                }}>
                        {hIdx === 0 ? row.m : hIdx === 1 ? row.c1 : hIdx === 2 ? row.c2 : row.c3}
                      </motion.div>)}
                  </div>)}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>;
};