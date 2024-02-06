'use client'

import ArrowRight from "@/components/Icons/ArrowRight";
import EyeIcon from "@/components/Icons/EyeIcon";
import Logo from "@/components/Icons/Logo";
import React from "react";

export default function Home() {
  return (
    <main 
        style={{
          backgroundColor: 'rgb(0, 0, 0)',
          display: 'flex',
          height: '100vh',
          flex: '1 1 0%',
          flexDirection: 'column',
        }}>
        <a
          target="_self" rel="noopener noreferrer"
          href="https://nubank.com.br/"
          style={{
            fontFamily: 'inherit',
            fontWeight: '600',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            letterSpacing: 'inherit',
            color: 'inherit',
            textDecoration: 'underline',
            cursor: 'pointer',
            position: 'absolute',
            margin: '24px',
            width: '44px',
            minHeight: '24px'
          }}
        >
          <Logo />
        </a>
        <div 
          style={{
            display: 'flex',
            flex: '1',
            height: 'auto',
          }}>
          <div 
            style={{
              width: '50%',
              display: 'flex',
              flex: '1',
              height: '100vh'
            }}>
              <picture style={{
                display: 'inline-block',
                flex: '1'
              }}>
                <img 
                  src="https://www.datocms-assets.com/39397/1704720890-nu_core_login.png?h=1080" 
                  alt="Imagem de uma mulher usando um notebook sentada em um sofá com um gato ao lado" 
                  loading="lazy" 
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
                    height: '100%',
                    borderStyle: 'none'
                  }}
                />
              </picture>
          </div>
          <section style={{
                flex: '1',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
                overflowY: 'auto'
          }}>
            <div style={{
              flex: '1',
              display: 'flex',
              width: '100%'
            }}>
              <div style={{
                margin: 'auto',
                flex: '1',
                padding: '24px',
                maxWidth: '430px'
              }}>
                <div>
                    <h1 
                      style={{
                        fontFamily: 'Graphik, sans-serif',
                        fontWeight: '500',
                        fontSize: '28px',
                        lineHeight: '1.2',
                        letterSpacing: '-0.03px',
                        color: 'rgba(255, 255, 255, 0.88)',
                        marginBottom: '24px'
                      }}
                    >
                      Acesse sua conta
                    </h1>
                    <form onChange={() => console.log("aqui")
                  }>
                    <div 
                      style={{
                        paddingBottom: '40px'
                      }}>
                      <div 
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <label 
                            style={{
                              fontFamily: 'Graphik, sans-serif',
                              fontWeight: '500',
                              fontSize: '14px',
                              lineHeight: '1.3',
                              letterSpacing: '-0.01px',
                              color: 'rgba(255, 255, 255, 0.64)',
                            }}
                            htmlFor="inputtext_cpf">CPF
                          </label>
                        </div>
                        <div 
                          style={{
                            display: 'flex',
                            width: '100%',
                            position: 'relative',
                          }}
                        >
                            <input
                              id="inputtext_cpf" 
                              aria-invalid="false" 
                              aria-errormessage="inputtext_cpf_error" 
                              aria-describedby="inputtext_cpf_error" 
                              type="text" 
                              name="cpf" 
                              autoComplete="username"
                              style={{
                                fontFamily: 'Graphik, sans-serif',
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '1.2',
                                letterSpacing: '-0.02px',
                                color: 'rgba(255, 255, 255, 0.88)',
                                width: '100%',
                                backgroundColor: 'transparent',
                                padding: '12px 0px',
                                outline: 'transparent solid 2px',
                                outlineOffset: '2px',
                                borderBottom: '2px solid rgb(34, 34, 34)',
                                textAlign: 'left',
                                caretColor:' rgb(188, 132, 247)',
                              }}
                            />
                        </div>
                        <div
                          style={{
                            position: 'relative',
                            display: 'block',
                          }}
                        >
                          <p 
                            style={{
                              fontFamily: 'Graphik, sans-serif',
                              fontWeight: '500',
                              fontSize: '14px',
                              lineHeight: '1.3',
                              letterSpacing: '-0.01px',
                              color: 'rgba(255, 255, 255, 0.64)',
                              marginTop: '8px',
                            }} 
                            id="inputtext_cpf_error">
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingBottom: '40px',
                        textSizeAdjust: '100%'
                      }}
                    >
                      <div 
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <label 
                            style={{
                              fontFamily: 'Graphik, sans-serif',
                              fontWeight: '500',
                              fontSize: '14px',
                              lineHeight: '1.3',
                              letterSpacing: '-0.01px',
                              color: 'rgba(255, 255, 255, 0.64)',
                            }}
                            htmlFor="inputtext_password"
                          > Senha
                          </label>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            width: '100%',
                            position: 'relative',
                          }}  
                        >
                          <input 
                            id="inputtext_password" 
                            aria-invalid="false" 
                            aria-errormessage="inputtext_password_error" 
                            aria-describedby="inputtext_password_error" 
                            type="password" 
                            name="password" 
                            autoComplete="current-password" 
                            style={{
                              fontFamily: 'Graphik, sans-serif',
                              fontWeight: '500',
                              fontSize: '20px',
                              lineHeight: '1.2',
                              letterSpacing: '-0.02px',
                              color: 'rgba(255, 255, 255, 0.88)',
                              width: '100%',
                              backgroundColor: 'transparent',
                              padding: '12px 0px',
                              outline: 'transparent solid 2px',
                              outlineOffset: '2px',
                              borderBottom: '2px solid rgb(34, 34, 34)',
                              textAlign: 'left',
                              caretColor:' rgb(188, 132, 247)',
                            }}
                          />
                            <button 
                              type="button" 
                              style={{
                                position: 'absolute',
                                right: '0px',
                                bottom: '0px',
                                top: '0px',
                                outline: 'transparent solid 2px',
                                outlineOffset: '2px',
                                color: 'rgba(255, 255, 255, 0.64)',
                                background: 'transparent',
                                padding: '0',
                                border: '0',
                                cursor: 'pointer'
                              }}
                            >
                              <EyeIcon />
                            </button>
                          </div>
                          <div 
                            style={{
                              position: 'relative',
                              display: 'block'
                            }}
                          >
                            <p 
                              style={{
                                fontFamily: 'Graphik, sans-serif',
                                fontWeight: '500',
                                fontSize: '14px',
                                lineHeight: '1.3',
                                letterSpacing: '-0.01px',
                                color: 'rgba(255, 255, 255, 0.64)',
                                marginTop: '8px',
                              }} 
                              id="inputtext_password_error"
                            >
                              Possui 8 caracteres ou mais
                            </p>
                          </div>
                        </div>
                      </div>
                      <button 
                        type="submit" 
                        disabled={true} 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          outline: 'transparent solid 2px',
                          outlineOffset: '2px',
                          cursor: 'not-allowed',
                          backgroundColor: 'rgb(34, 34, 34)',
                          borderColor: 'rgb(239, 239, 239)',
                          borderWidth: '0px',
                          borderStyle: 'none',
                          borderRadius: '64px',
                          padding: '0px 24px',
                          boxShadow: 'rgba(255, 255, 255, 0.96) 0px 0px 0px 0px',
                          fontFamily: 'Graphik, sans-serif',
                          fontWeight: '500',
                          fontSize: '16px',
                          lineHeight: '1.3',
                          letterSpacing: '-0.01px',
                          color: 'rgba(255, 255, 255, 0.32)',
                          minWidth: '48px',
                          minHeight: '48px',
                          width: '100%',
                          height: '56px',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <span 
                          style={{
                            fontFamily: 'inherit',
                            fontWeight: 'inherit',
                            fontSize: 'inherit',
                            lineHeight: 'inherit',
                            letterSpacing: '-0.01px',
                            color: 'inherit',
                          }}
                        >
                          Continuar
                        </span>
                        <div style={{
                          marginLeft: '12px',
                          boxSizing: 'border-box',
                          textRendering: 'optimizeLegibility',
                          textSizeAdjust: '100%',
                        }}>
                            <ArrowRight />
                        </div>
                        <s 
                          style={{
                            backgroundColor:'rgba(255, 255, 255, 0.3)',
                            position:'absolute',
                            borderRadius:'50%',
                            opacity:'0',
                            width:'35px',
                            height:'35px',
                            transform:'translate(-50%, -50%)',
                            pointerEvents:'none',
                            top:'0',
                            left:'0',
                            transition:'initial'
                          }}
                        ></s>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            <footer style={{
              minHeight: '80px',
              background: 'rgb(34, 34, 34)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                maxWidth: '430px',
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                gap: '24px',
                paddingInlineStart: '24px',
                paddingInlineEnd: '24px',
              }}>
                <div>
                  <a 
                    target="_self"
                    href=""
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      outline: 'transparent solid 2px',
                      outlineOffset: '2px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0)',
                      borderColor: 'rgb(239, 239, 239)',
                      borderWidth: '0px',
                      borderStyle: 'none',
                      borderRadius: '0px',
                      padding: '0px',
                      boxShadow: 'rgba(255, 255, 255, 0.88) 0px 0px 0px 0px',
                      fontFamily: 'Graphik, sans-serif',
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '1.3',
                      letterSpacing: '-0.01px',
                      color: 'rgb(188, 132, 247)',
                      minWidth: '48px',
                      minHeight: '48px',
                      position: 'relative',
                      overflow: 'hidden',
                      textDecoration: 'inherit'
                    }}
                  >
                  <span style={{
                    fontFamily: 'inherit',
                    fontWeight: 'inherit',
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                    letterSpacing: '-0.01px',
                    color: 'inherit',
                  }}>
                    Esqueci a senha
                  </span>
                  <s style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    position: 'absolute',
                    borderRadius: '50%',
                    opacity: '0',
                    width: '35px',
                    height: '35px',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    top: '0',
                    left: '0',
                    transition: 'initial'}}
                  >
                  </s>
                </a>
              </div>
              <div>
                <a 
                  target="_self" 
                  href=""
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    outline: 'transparent solid 2px',
                    outlineOffset: '2px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    borderColor: 'rgb(239, 239, 239)',
                    borderWidth: '0px',
                    borderStyle: 'none',
                    borderRadius: '0px',
                    padding: '0px',
                    boxShadow: 'rgba(255, 255, 255, 0.88) 0px 0px 0px 0px',
                    fontFamily: 'Graphik, sans-serif',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '1.3',
                    letterSpacing: '-0.01px',
                    color: 'rgb(188, 132, 247)',
                    minWidth: '48px',
                    minHeight: '48px',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'inherit'
                  }}
                >
                  <span style={{
                    fontFamily: 'inherit',
                    fontWeight: 'inherit',
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                    letterSpacing: '-0.01px',
                    color: 'inherit',
                  }}>
                    Não sou cliente
                  </span>
                  <s style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    position: 'absolute',
                    borderRadius: '50%',
                    opacity: '0',
                    width: '35px',
                    height: '35px',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    top: '0',
                    left: '0',
                    transition: 'initial'
                    }}>
                  </s>
                </a>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
