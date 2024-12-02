let currentElement = null;
let selectionEnabled = true;
let images = [
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAM1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADbQS4qAAAAEXRSTlMAbJh9RxkO29j/yamPVrczJ8Pt3KAAAAFMSURBVHgBpZaHboRADESzhR1vofz/10YYgVbbbCVWS8Q7Dx6Xu5+/h7HObyIVQDFGMhKXIoeXODxckjiSuTofpErcA0Is2DKXZf/ubJA5YlUxEm6b5aaBq3BaWwSs4OEoyEVwGFmWIyk5aLkgTx/HvuSOj7NLLn9cUnJQvh/p6o045X5wHEoOOt0Ir8sXs5xPFE4dJ+eLu5LLSg5Bx8Uk+8LhZtiFWMc140pNWVz/LHdDVPns+DlZCNz73GN58z3eeXq4slpKHPcnaGUzmGv/HMtifyqiOYd6HTH9DvGcItQWmdkI0FfiRpPVPPG+USU8SYfKsTxezast0I+FqZuQoXChzofEbo7mmJrh6YUxOCh737o0aufZSxTGmm0IePsTjro0O+x3NoXgX+/AquObhOoCZyL+rxUGCLkR6ROCMBhSdGvtzPjnCBYn+RfjSBgmLvj3QgAAAABJRU5ErkJggg==",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAOVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLcPMfAAAAE3RSTlMAEUnb2Qj/qXuTWiq2hjgd0MZsnh1hdQAAAWlJREFUeAFioAAAKqvabQdBGAam1KHOCe//sPfoWZ0o0N781Jx+JsV7C2sAAYBGC+Ado8Z78QHSePHL87Z4PCm8GQcNaoELlPoE7yOeSluxZ/2oPJiiuW3nUdJoE9nGTHwAWRMBm/YW+QtYeWuXl1nwUnYh6E8msa1AsIAU0Qsw9bbBbEq8XHlZKU9ARh6GFs2DTQE/XABBiafu7sLbhs5oiH9wA+AN88suNa/RWHQ7AFHnYS93acgPxZhHzoaFvF1Aagwat3UExUb/0sGs6IBG6q8tiuLRs5yk3ZyL6Ck/41RTlwexhfh9bR5cpu3SUe6Eux6GqgpeOL0jAakVjsZCsqhJCuWPWHfmXGSVrpZ6E0l9R+JRzufuFbolno4mlue3VBZHMrpu4kDVFxf3s7/V7+JjdVS/s9u5uiH83BjrxyGFeVokVSZUNBTlTcQ19bslIMTiYMBXHica5/U+QYSn65+O85kJro0/T54Sed6JR4cAAAAASUVORK5CYII=",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABz07T7AAAAFnRSTlMAktagaEzb/7eFw6zZB3PMNSRCWBLnZ2OeYwAAAYlJREFUeAHNllGShDAIRJ1omjGiRnXvf9WdkbKM2SD5XD6tJwG6MTb/J17OtZ03MYA+8baw/sAoWNxAR3Alh9HgJhauNfsQzux3DHVcM3/bGGwMH240sfaoL1rYUtkGSDgj4QqSCLYaNQfj5Pix48h0RvdoKmHMAt3FwSxPghcd25J85HQuUBLcq45CyumW7uges8K9M04TmTNOWzrcmAAtIQhbMmcHCgrHa3qmA+9l1Xy86QYayosW/SXH8l0CRinfT0xG+JVjgCuognnfsimD9gLnmikb3oRChTE2ST4cxlqjZWiajG9LjfNBVc4fXR3nKeVWlXsJsEva3tjL0EQ8NrLgHBwe74britnwsEjzme58pdzIWw7rZPegNdJKNp/UgNJIcF9FLnMTy+RujkD3B0taSGY05y1wWptW4AjJdjfckD/qULxJfS7JJFhey5J7qzseoPhZwp6JHxS1ffaHsStcf7h8lIwf0is/MnAAXlcpUG0GvmwTwaHkbg5tmDJTzUvO9clIfwEuIxgzUaA68AAAAABJRU5ErkJggg==",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAARVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADZo62CAAAAF3RSTlMAN0AWSdv/BtlXprRjICrAD3jK1Yf1mH0GEogAAAGFSURBVHgBYhhEgBHQSHllSwyDMNQpYkjv2f9OXzHp2EP4vseALJFmL6gcIAAfiwP9F1tYwZ5DZnEklRtcCuHKd/NRZXG1gI2ByYQMU8IWZtdzvsTEOs/BwtJN5tTgBDMfLPCOE8xs3Atn/tsgjNl4PDnOzG2lBssCduOJLsVjNGdMN3COcCXdC70hshrR4uqIQZcW9oMJ0dKcSrctCCERU8LsluOpj0sQfLAluOLWsgdXeueG2HUnV0joUeg84rKyRG4AKSPOGN343LVDpznnVvUbnV5ldS7HCdZmQKS6L1iGd85PTbtI1XSpIs7NQpjRrKRjx68SMjoYHEskJQJoYliJzVLt9G2RkneBpfEaWQK7Q53L2c/55eJyKx8YW2SEhPuiEAcWmXA/j3XwFiUA3R6QxpPSQ988VgPmQMAgqzoIQhH3j1GeyjCFfkk19l2hMN+G2+t44TDgGaa04lC4WCsIqjQ3aSvMQKK4wc+91nWN9HQUollm5JcZu6pV3FLNIyY/+i8dRxZBvPsl/wAAAABJRU5ErkJggg==",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABz07T7AAAAFnRSTlMAB5DZ27kYaP8jnkLOdi9arhKGTcXoDQnw+QAAAXRJREFUeAG91VXapTAMBuBCPiBIcfa/1LEWq2Z+y/X7kNPYUT8RhUiVBEJV51gD/httzhnGldDhq1xnIPocBNnv5eKfG5QkMekxx3qSZLXvpSnHZojKMhrG1Oey2piTTF8Oss8xLQnWEl+hE67kO0iSNv0D+5froq7iZ2CNvQL8hlvYdewEiuwrLEynTf/EhhltdxuNcOb1bx79yLkAvIeeQY0qLvdXEGELOCi1vpyqCBg9p5WC098B3gUBr9Y9F30HuQ4vx7a/ldPoAqVtsTNY7iUcaru96a75zUvusGYWrdx0O6RcL3Rjfk5teW5YCh88CB0l2A7JQ0YYRhopt8ImLM0xr5M5Aa3UHP2T28jm7OxWMW++6q3C0N4HWMcUY3rWZ46sOGhRT0fhYcKzAeQXpiPDHmnMg9H6vQI294x4DxkH5i40sJU/TVvIwZ+STuRWgsipDo3y34HFg9p570aRZV+cD27MBzOgx1qlN/So5/Mw/AYaUximo0BRWwAAAABJRU5ErkJggg==",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMAZX8WCC7b/0uModnHddCvPLpdk6N5mDsAAAF0SURBVHgBvdVXgoUgDAXQKHKjhmfd/1qnMDaa4Wvy9cqhXgX6h2raxnSqsgAzo9cc2FdX6YZKN2pO2Bc05+CdIxV691GdYWagpZqFTKTW9OtmlQ3wq10U1oGrlnswFvPKnHil7YuFN+rAqyd6bnI7WcqsAd81K4vVB14kcMUOJw4KQ5714Aj2pe6wrAHsCqsASdCjZNjGjDZyyKQ3+ua3Ww2ym+MYO9F+uYE6AdbM9EBPt/3mDVlStwWRGPIQn8RR4NrjyYiG7hnGuzBfA27C5f7FJPHe9UD0nkUZy3JAlw357nDXXzhfor/A+htyz1A7Ez6VEzTwSD+0aie4X868upnP6l+nhxq3eaW6GVzhLA6GsS07O51q7mgpucWdajW/jUpn6qEE9v4+pqEeDHi2c6UTEvc/kg9OwAxs4TyQTSt8U10h4CZqLYWNsRCbrH+jtNbwnJWSIyDpb6EsnGJnCyd5fIWhJ63kiBEyvjqzWHb33nwD3xcW+xfnS5kAAAAASUVORK5CYII=",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMAedunTf9dy9nBFILWLyRtjgq2PJtYCrcAAAFxSURBVHgBYhg8ANBYeSA8CMJQGJ9EWe77n/UfxgUK4XW3X7MNDf7VSpgG/auTuJ529RIH5ozEWebgBM6bnQtigNg9Q4mydVwDIuMHCRtxZSvXBZOEtaCa8EZDzHWiV5YtYjNzomNDFzcWsA50aS5wgW5BTpa5JcutTEiOHSIOkxwdg4MYXWn2WyLTdZFBm2kZVBN71p9ZYFbzzcz4LKLev50uLii9/zPVRGiUWp792ACzpFxD2J9PeY7Zvqs37VvjVMtBA1uabhfVOpxbqY3TMHZje/G8rOiT0eOBTjmFpH0chjMXeMb13WWLeK7kSySUuStCyPslHj/pUm/K3Hpya5nTlQEuddyGKm4G1XA9qILbDGNAKHDDacysKs+NF2WdynPrSfGCDJl14BGvgP7b3nZi8+PsQq4egH42GZktFHw8DMZ9j9OWDtfwzU0pt306Rl9lTxnEuzW78c1tsENpDlod+cWmJC3gHs7auyKYnja/dkoRPdfJcHAAAAAASUVORK5CYII=",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMAGUEw09v/nLjZwcsme2QLU6hui+OB+WQAAAF0SURBVHgBYqADADRWhksOgjAQFnSjqFSU93/XG8w041lNkj/Htd8ssEmXEHsPNoAAjBY2glqZkozRZHGJOTj14Dwfgil4grOF8QnTZGILiLCaWAYRDSa2nr6kj8sWW/Djs3kDEZe+8cSQ6R+ES6onJIXNJUdU3rF45XalY0xYzoT0j5v1SZZKxzPWQxD1yjsRSr2Cw5spaDBJ4cmbAELtZrLuXM6PqzBzAeFhGg5KuevGi885PQlmwrVzLTgKHrwZKF/nj5opGci/Ln/+eR24k+nW54I5yr7ChUTx9sMA/xGQv8+4mx1vI1j5//oy2AfMwedavAE4gTl/JBhV4du48248+iJ/d0X5hi9WFYobZ8r1A8jm1oWpBDWjAUkCKNctX2zkca1aWznqQ1vnl8OdHLC2dVseb11IBLBIVJN8ESuKGqizhHxWuYyv3qByHbBdEjMqwZvl6uqD3mOV40EdqpPbnQ9/OPV6H0dI45FVbv19vP4ADToTlQTqExsAAAAASUVORK5CYII=",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABz07T7AAAAFnRSTlMAO0wdV9v/0WVDpV/ZL8SVi7fvd38G06alqgAAAVJJREFUeAFioAMANFYWSgzDMAxNQSo55f3/p448SC+3qRocvTMkslOUVdCqAQKQHPhQI8M5B5W6pasTXAfn+iB0lhscrIIEScIkFy3NKuqLEhvtwUFhpXeBeCarLnB6c9DhqO93Bt9qZTjX8gernJMF9vzKzqUlonKKPEFjKnQinKrQyLVdk4Dzzy6WaqU6mgiiDk3K9T/sjkdQFXAj9oMRAOwh1058toEvDsBCroXz4y/1AbDlHB5WGpnEC4Nhyb1iQwjzsQfQumyA4sFZzx4KIB+N539zDLjgh68jjtdWXuSIeEptakx6D52fYR1wEsbKWsa5xG8XiHmyRWBAPh25CsOZBdiDru3/Y/TGWOhg6p0ZEwwX9QSaLeoqGpBYQq+4AKLzYVJc6fchOHtykFxvm7cjPbq4/xRXmKelMks9OVcHqTmxi5wP2DjUUcRDm3nhBgaZExV3GkLFAAAAAElFTkSuQmCC",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMAd6GSUyoK2dv/wdODsGQdQjTf9UYm16EAAAEySURBVHgBtdVVkgMxDARQU6zWMNz/rAvOVFbB1pK+X8luY/j/iimXE1VVoKqIzHXaqjCHs+udDszJ4ViSeIZCAw/NjdTVDwXhDi0FrQ6u2U1oafMfLV/uDzfzdq0Guhue/Y2XfvC1IxOEXmpii3fUyIdlB6aiCRokqXULTUEaLjduYsOSJHLjUJ5NT2K0sH/mcBO5Phk3mch1geaHDpiNW8Ow4RGbgQ9rJ7fhUeSiqAE2bdzQ3buMNYT0BbePhro+2o7rvcMYTs+fhRFqo2RyBvkdmYzLL9yq6rtMMDD5HDrfHRb6gXAWRs7s8UdPmJxZeqlOOFh5yRa4fqMi6nqeJ5czeyHELeLrF6Cjx1Xsi6uf7JPLDaLG0cQ9dXNzmbraGi6BFnemnyAvQ30JVcujOb4DrX8YFwTuH+YAAAAASUVORK5CYII=",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAOVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLcPMfAAAAE3RSTlMAUr3ZeV6Z/wfbJx2HPROoat/O/ll7UAAAARpJREFUeAFioDkAtFZW2QHEMAx04pCWd+9/15LKJBfme4Lys1P2XKopmvc7fJgA/QHlTU6vCG8GvRY8FybIFBdTLA/eGvKQpZfAVwi2h+vtFnsu1LGVntwQnUDejmD6Pl1aMt/07OXvQ6MkL+gv3iaLiiRZAmRRx+qHTDxWPmSnQVyHRpoMjUCGQXDY5xydqA3Le2/I/UiJ3M/2E5Fzq51Yvi0qctrekewT4Kn1Z5DnL7qCX1a9v2H6NI/xLroD1b6g0iCQFU38CtYMDuHpk69OiIdqmt1Dh+f8FlU03kIdBi3UsahJD2JwreoJZIM6lDRqLjTgQUNsmMMkF+hJ/tlLQW8PviM4VTfE9mPH34L7+XVM39fB/OX4uAWM1RRNeINNaAAAAABJRU5ErkJggg==",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAANlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAR2LVAAAAEnRSTlMAB9Hbv67/WG4uYCF9kUGgDN/Vj3pbAAABHElEQVR4AWKgOQB0UlfZFcMwEECVjK0weP+LfRSVW82c6vsaBV0PoFTq4M/oGRsuB+ZGv9xE3OxXzMQtcO2C/QtiMRar8o74GMwmnctP3Z7Mq2nPRcdO9StGZTv+3tE1t767Pa8W94iNV4GQ38O1C+LDnZrz7CH7J7cmrvpHHNqxXnjW2INn19z22fWig+oWVi2003d36QMn1y44f3UDrXqy4QB+wYDizxTxJcdXB+2nHTXty7bUFjD96WY2trRoOoSzlo8txC7H02G11B12tvS54WYr1yOI6yY82cKcscb8z4CpGeugbbewzEbs4hyftTEedRUJ48/dTHMTYXu4kbjtidrRoBxbrRTy3BrtvUWtpO3bUPe60f1+r6k7xMQRmVEI4E0AAAAASUVORK5CYII=",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAANlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAR2LVAAAAEnRSTlMAK0o82/9+uxyhyq8L13LfXpKCuqO2AAABMklEQVR4AWIgHwAaK6uECWEgBiOpAUXuf9hfKuubCc9fRzNhnGYFAxwAb2EB7v+LFlcxl0RuETlY3IrKbWbALNVXM8PmACXrkP7TBhObUbqYpLHYAXdxfA1zx6RxbhW5LHJQOa7ppXPOczXfuCDGA+WyyEHjpgeOXZx3948NJt2xvGlcGMR4g1YfqOqd1u/+0O8prZcrNT9wOKkMpE6uRy5/DzjdKXrt8Q5R8W/PnMvxC1cbzjiMXtBuKBw2V0zjRAm8U674NBUNbskOqgV0D78OumJ0T8tcWmhpz4NKuswvd37ievbtjmHoea7NumTc2zasfChNp8N8WH9WFK5qYVTsiocbRbtKdyyZbuoD6ux4WozDtiKbaVH7gZU21MiA4S5Xu+QFiXLAep5x0Nz03Zt/AfkPD/xPU18yAAAAAElFTkSuQmCC",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAP1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC6E+JdAAAAFXRSTlMAbLPAnWBR2f8v3DVEB6bKFIx4It80HTDwAAABW0lEQVR4AWIgGwAaqxMcB2EYCqCFEPz57DT3P+tIQ3Gm0sS2VqQ+JY63dn0a8uiyJAAgHpsIAKDnMm43xxyW2L1+gHJD/8H9r1tdtwHgfnjsZOjWRQDgch1jrx1uxxw6DthtNj6OtuuAUH3z43CabgZCAR5AKMCV6uwCq8MSdFfQbb7zH7yKOvHz4ifmTXU5GN8RdGaer6CrDG+DZUEof0Nl4OKtAj+B25cb7LavcGqW48tBgo5nw02f3xM/H9l0w2t/oDWWZXy9UrGSuNRD+mKct6BWTO4IjPXSaUuw0QznPeHa2WL1QalHD1YfXPVzNNq03INRAMhqONaFxAabqQtyBIC+4a66p5I1wklfuxYAcjScaEyn2X7UohXLdXxSmwmAnXEtulo/a1dx1j9/WkNZPkeXtuPfbTFuhbPbBPeTxWi+op05Mcn/jtwF3PW6K6XBWByl6HgftXI/XPwYvB8SNVIAAAAASUVORK5CYII=",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAOVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLcPMfAAAAE3RSTlMAaqq0iFpQxP81RcKckAd8FCnHpLtREgAAAVJJREFUeAFiIBswAhorwyQLQRgGr+ijwYIK9z/sjrwBcXZL6+9vEhIqdev28Sq2EgCQhgWCifvgywUbh13zZdiMiSq2q4Fjk1O+dGPu0LCTAOiu/sawqFzFwBq2ceXIm+QAp5yOYap5QeOC6Xa1xAGwHPC4ANMBL+rcYeoFCEZuMXKbwtkCPxxP88JWTObOzSfGdblryiXBVszLc9vO0aLXogr6BwMlZZyFxCKHKHI7jIKwCV6wCeYWtcxnKzS/9QtynuUoe7+/OOuZnh+PpP76qUJ1XoVXrdne7yoApMmUlkF7mUxfGrS9zFEY1kOQudL2pnwh+81to7Ycl7LACbY/Zc71Zlnk6vHONjpFvI4TQAnjFTrRtv+NqzgunscY8jqk0SmTtGzyS+EjTp97bYOE2rnExa5+8sageMxmqvdZwH+emUhEVMo7Yn4neZWGf3/GXwNUFxwNMtX+AAAAAElFTkSuQmCC",
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACcAAABACAMAAACujJ7lAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMADpW4oWA/Kdn/TNvGctEbfoisMtRGjVgAAAFSSURBVHgBrZVRkoQgDERXFQZoQNX733VHszpgGZLamnz58cRO6LQ//66uH0ZjOwl7Ob+XkTjCfJA4EBeVHLTcS+ASCcziXNLBjSI37V9FL3KgLqRyUKmbcXS7fGl8I4hznXgc1azkopKDlmsLjESJRh0IEi94vTjXnt/FQctpv9vp+vCbbi4ILS4r9Vmc3PAVw/Tu5ILuOL825bmLwyReh+zUXHDYxPCjyuL1UsGynPG6A3sCRIXR6w7En7B4PrQ5KWa6Yy5I7ye0Utp+DrGt3818YBS5Cbz5h1IT+GVypaEGvg+UAbSyXHLlXixsauVyEtTUxMlD7Qn7ZJZd3ueHELj5xXorLLedqFNvY9JyQb2NgVkm3MInPRtmpG5v3s7P1sPd2+uzBcz9xVk8jrIBYzJL+fGAt75U9U/Wh7v1vMG7igOMiTk9ZCm9Klb2wMzk4y+gPBnDhtgMYQAAAABJRU5ErkJggg==",
];

if (!document.getElementById("##MrDivWalkerCss")) {
  let elem = document.createElement("div");
  elem.id = "##MrDivWalkerCss";

  elem.innerHTML = `<style>.man{position: fixed; pointer-events: none; z-index:1000; user-select: none;} .delete-highlight{background-color: skyblue!important;}</style>`;
  document.querySelector("body").appendChild(elem);
}

function onMouseDown(e) {
  addWalkerIfSelectionEnabled();
}

function addWalkerIfSelectionEnabled() {
  if (selectionEnabled && currentElement != null) {
    addWalker(currentElement);
    if (currentElement) {
      currentElement.classList.remove("delete-highlight");
    }
    currentElement = null;
    selectionEnabled = false;
  }
}

document.querySelector("body").addEventListener("keypress", function (e) {
  if (e.key === "q" || e.key === "1") {
    addWalkerIfSelectionEnabled();
  }
});

function onMouseMove(e) {
  if (!selectionEnabled) return;

  let x = e.clientX;
  let y = e.clientY;
  let elem = document.elementFromPoint(x, y);
  if (elem && currentElement !== elem) {
    if (currentElement) {
      currentElement.classList.remove("delete-highlight");
    }
    currentElement = elem;
    currentElement.classList.add("delete-highlight");
  }
}

function moveElementInArc(element, targetX, targetY, duration) {
  return new Promise((resolve) => {
    let startX = parseInt(element.style.left, 10);
    let startY = parseInt(element.style.top, 10);
    let startTime = null;

    function animateArc(currentTime) {
      if (!startTime) startTime = currentTime;
      let elapsedTime = currentTime - startTime;
      let progress = Math.min(elapsedTime / duration, 1);

      /* Calculate the height of the arc based on the minimum of startY and targetY, subtracting 100 for the arc's peak */
      let arcHeight = Math.min(startY, targetY) - 100;
      let x = startX + (targetX - startX) * progress;
      let y = startY + (targetY - startY) * progress - arcHeight * Math.sin(Math.PI * progress);

      element.style.left = x + "px";
      element.style.top = y + "px";

      if (progress < 1) {
        requestAnimationFrame(animateArc);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(animateArc);
  });
}

function selectDivToJumpTo(currentElement, xPos, direction) {
  /* If direction is 1, we need to find an element whose top left is to the right of us,
    otherwise, we need an element whose top right is to the left of us*/
  var elems = document.querySelectorAll(".box");
  if (direction === 1) {
    otherBox = [...elems].find((x) => x !== currentElement && x.getBoundingClientRect().left > xPos);
  } else {
    otherBox = [...elems].find((x) => x !== currentElement && x.getBoundingClientRect().right < xPos);
  }

  /* if (otherBox) {
    otherBox.classList.add("temp-color");
    setTimeout(() => {
      otherBox.classList.remove("temp-color");
    }, 1000);
  }*/

  return otherBox;
}

function addWalker(element) {
  let boundingRect = element.getClientRects()[0];
  let currentIndex = 0;
  let currentX = undefined;
  let velocity = 3;
  let direction = 1;
  let mrDivWalker = document.createElement("img");
  mrDivWalker.classList.add("man");
  mrDivWalker.style.left = `${boundingRect.x}px`;
  mrDivWalker.style.top = `${boundingRect.y - 64}px`;

  element.insertBefore(mrDivWalker, element.chilren ? element.chilren[0] : null);

  let interval = createInterval();

  function createInterval() {
    return setInterval(() => {
      boundingRect = element.getClientRects()[0];
      mrDivWalker.setAttribute("src", images[++currentIndex % images.length]);
      /* If it's the first time the interval function has run currentX will be undefined.
         We need to set it to left or right depending on what direction we are currently going. This is
         because when we jump between divs we could be starting either direction depending on whether we jumped from.*/
      if (currentX == undefined) {
        currentX = direction === 1 ? boundingRect.left : boundingRect.right - 39;
      } else {
        currentX += velocity * direction;
      }

      if (currentX + 39 > boundingRect.right) {
        if (direction == -1) {
          currentX = boundingRect.right - 39;
        } else {
          var divToJumpTo = selectDivToJumpTo(element, currentX + 39, direction);

          if (divToJumpTo) {
            clearInterval(interval);
            let jumpDivBoundingRect = divToJumpTo.getBoundingClientRect();

            console.log(`Jumping because currentX is ${currentX} and target left is ${jumpDivBoundingRect.left}`);

            element = divToJumpTo;
            currentX =
              undefined; /* Set this to undefined so when we start the new interval, it is set to the correct value, left or right */
            moveElementInArc(mrDivWalker, jumpDivBoundingRect.left, jumpDivBoundingRect.top - 64, 1000).then(
              () => (interval = createInterval())
            );
            return;
          }
        }

        direction = -1;
        currentX = boundingRect.right - 39;
        mrDivWalker.style.transform = "scaleX(-1)";
      }

      if (currentX < boundingRect.left) {
        if (direction == 1) {
            currentX = boundingRect.left;    
        } else {
          var divToJumpTo = selectDivToJumpTo(element, currentX, direction);

          if (divToJumpTo) {
            clearInterval(interval);
            let jumpDivBoundingRect = divToJumpTo.getBoundingClientRect();

            console.log(`Jumping because currentX is ${currentX} and target right is ${jumpDivBoundingRect.right}`);

            element = divToJumpTo;
            currentX =
              undefined; /* Set this to undefined so when we start the new interval, it is set to the correct value, left or right */
            moveElementInArc(mrDivWalker, jumpDivBoundingRect.right - 39, jumpDivBoundingRect.top - 64, 1000).then(
              () => (interval = createInterval())
            );
            return;
          }
        }

        direction = 1;
        currentX = boundingRect.left;
        mrDivWalker.style.transform = "scaleX(1)";
      }

      mrDivWalker.style.top = `${boundingRect.y - 64}px`;
      mrDivWalker.style.left = `${currentX}px`;
      mrDivWalker.style.display = "block";
    }, 30);
  }
}

document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mousedown", onMouseDown);
