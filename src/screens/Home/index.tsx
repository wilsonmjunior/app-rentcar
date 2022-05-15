import React from 'react'
import { FlatList, StatusBar } from 'react-native'

import { Header } from '../../components/home/Header'
import { Car } from '../../components/home/Car'

import {
  Container, 
} from './styles'

const data = [
  { id: 1, brand: 'Audi', name: 'A4', rent: { period: 'ao dia', price: 80 }, thumbnail: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHkCFmRIZWMpTkwoYgSrcmLgycxPTU_VBAvyM3IkmuqkVJbp5qbn57EBpEZ7TvCztkz5XvxVYe6vyW7kS565brw0YeFhqlM2uz8nZ6rlWqehf_irVLp2YMgaeNak-wrsPXVpos_Vr2dyYjRtCvTcvZeB5um5ewqT1ig49MgeX86t8-pE_0VGeged5yN7lrmwKah8s-orKvq4-dV8kQZKBx-FuR8Hx0Pm3v2391GC-Z3FpiXPOHAaeiOTrh1eseOa30HlOx029jJ5Te2YIMfBwxeqXb53aZbfP_q7u7W3fnGPmWT5g4JHmfdi0yF_E49S3_Bb1w9vKt8tw8jLwhPef-u3NbN7q_3-qoPDF5u8Mf38LMvBc_dl0gNmb49WD1CS7b8IrP2ZN3nmIgUew2zfwqM4vleSvkjZe4Uah3cd86hl4qiWMExavZsmK22604Ldy4gSmGHFbBp6MJOngr9cZz7ft4ze6uHS_RusV-88MPA_m9mVVXF21OibD_dPNmn9dbEon1Rl4IsOX1n3WeBpZcaPhRaBRi_XLHV47GHhezPM-bOHzZ3b01gcP9WS9Vvpr1s5l4NlbofibJc5C4OaTE5c7_56UTb9uAXTvRc53_5b-2NN2_6TV3ah-Dt0jpbMcGXg0L4ctLp1QLqCf4j2zQerfK82CuzMZWIGRyyQGJFgYgQTPViDBsZABTIKiPQNIMLqD-KzPmRkYuB0YGNhCGECAT7i0KKcgsSgxV68otbggP684syxVUMOASCDM6uMY6RoEAIC1KheUAgAA?mimetype=image/png" },
  { id: 2, brand: 'Audi', name: 'A4', rent: { period: 'ao dia', price: 80 }, thumbnail: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHkCFmRIZWMpTkwoYgSrcmLgycxPTU_VBAvyM3IkmuqkVJbp5qbn57EBpEZ7TvCztkz5XvxVYe6vyW7kS565brw0YeFhqlM2uz8nZ6rlWqehf_irVLp2YMgaeNak-wrsPXVpos_Vr2dyYjRtCvTcvZeB5um5ewqT1ig49MgeX86t8-pE_0VGeged5yN7lrmwKah8s-orKvq4-dV8kQZKBx-FuR8Hx0Pm3v2391GC-Z3FpiXPOHAaeiOTrh1eseOa30HlOx029jJ5Te2YIMfBwxeqXb53aZbfP_q7u7W3fnGPmWT5g4JHmfdi0yF_E49S3_Bb1w9vKt8tw8jLwhPef-u3NbN7q_3-qoPDF5u8Mf38LMvBc_dl0gNmb49WD1CS7b8IrP2ZN3nmIgUew2zfwqM4vleSvkjZe4Uah3cd86hl4qiWMExavZsmK22604Ldy4gSmGHFbBp6MJOngr9cZz7ft4ze6uHS_RusV-88MPA_m9mVVXF21OibD_dPNmn9dbEon1Rl4IsOX1n3WeBpZcaPhRaBRi_XLHV47GHhezPM-bOHzZ3b01gcP9WS9Vvpr1s5l4NlbofibJc5C4OaTE5c7_56UTb9uAXTvRc53_5b-2NN2_6TV3ah-Dt0jpbMcGXg0L4ctLp1QLqCf4j2zQerfK82CuzMZWIGRyyQGJFgYgQTPViDBsZABTIKiPQNIMLqD-KzPmRkYuB0YGNhCGECAT7i0KKcgsSgxV68otbggP684syxVUMOASCDM6uMY6RoEAIC1KheUAgAA?mimetype=image/png" },
  { id: 3, brand: 'Audi', name: 'A4', rent: { period: 'ao dia', price: 80 }, thumbnail: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHkCFmRIZWMpTkwoYgSrcmLgycxPTU_VBAvyM3IkmuqkVJbp5qbn57EBpEZ7TvCztkz5XvxVYe6vyW7kS565brw0YeFhqlM2uz8nZ6rlWqehf_irVLp2YMgaeNak-wrsPXVpos_Vr2dyYjRtCvTcvZeB5um5ewqT1ig49MgeX86t8-pE_0VGeged5yN7lrmwKah8s-orKvq4-dV8kQZKBx-FuR8Hx0Pm3v2391GC-Z3FpiXPOHAaeiOTrh1eseOa30HlOx029jJ5Te2YIMfBwxeqXb53aZbfP_q7u7W3fnGPmWT5g4JHmfdi0yF_E49S3_Bb1w9vKt8tw8jLwhPef-u3NbN7q_3-qoPDF5u8Mf38LMvBc_dl0gNmb49WD1CS7b8IrP2ZN3nmIgUew2zfwqM4vleSvkjZe4Uah3cd86hl4qiWMExavZsmK22604Ldy4gSmGHFbBp6MJOngr9cZz7ft4ze6uHS_RusV-88MPA_m9mVVXF21OibD_dPNmn9dbEon1Rl4IsOX1n3WeBpZcaPhRaBRi_XLHV47GHhezPM-bOHzZ3b01gcP9WS9Vvpr1s5l4NlbofibJc5C4OaTE5c7_56UTb9uAXTvRc53_5b-2NN2_6TV3ah-Dt0jpbMcGXg0L4ctLp1QLqCf4j2zQerfK82CuzMZWIGRyyQGJFgYgQTPViDBsZABTIKiPQNIMLqD-KzPmRkYuB0YGNhCGECAT7i0KKcgsSgxV68otbggP684syxVUMOASCDM6uMY6RoEAIC1KheUAgAA?mimetype=image/png" },
  { id: 4, brand: 'Audi', name: 'A4', rent: { period: 'ao dia', price: 80 }, thumbnail: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHkCFmRIZWMpTkwoYgSrcmLgycxPTU_VBAvyM3IkmuqkVJbp5qbn57EBpEZ7TvCztkz5XvxVYe6vyW7kS565brw0YeFhqlM2uz8nZ6rlWqehf_irVLp2YMgaeNak-wrsPXVpos_Vr2dyYjRtCvTcvZeB5um5ewqT1ig49MgeX86t8-pE_0VGeged5yN7lrmwKah8s-orKvq4-dV8kQZKBx-FuR8Hx0Pm3v2391GC-Z3FpiXPOHAaeiOTrh1eseOa30HlOx029jJ5Te2YIMfBwxeqXb53aZbfP_q7u7W3fnGPmWT5g4JHmfdi0yF_E49S3_Bb1w9vKt8tw8jLwhPef-u3NbN7q_3-qoPDF5u8Mf38LMvBc_dl0gNmb49WD1CS7b8IrP2ZN3nmIgUew2zfwqM4vleSvkjZe4Uah3cd86hl4qiWMExavZsmK22604Ldy4gSmGHFbBp6MJOngr9cZz7ft4ze6uHS_RusV-88MPA_m9mVVXF21OibD_dPNmn9dbEon1Rl4IsOX1n3WeBpZcaPhRaBRi_XLHV47GHhezPM-bOHzZ3b01gcP9WS9Vvpr1s5l4NlbofibJc5C4OaTE5c7_56UTb9uAXTvRc53_5b-2NN2_6TV3ah-Dt0jpbMcGXg0L4ctLp1QLqCf4j2zQerfK82CuzMZWIGRyyQGJFgYgQTPViDBsZABTIKiPQNIMLqD-KzPmRkYuB0YGNhCGECAT7i0KKcgsSgxV68otbggP684syxVUMOASCDM6uMY6RoEAIC1KheUAgAA?mimetype=image/png" },
  { id: 5, brand: 'Audi', name: 'A4', rent: { period: 'ao dia', price: 80 }, thumbnail: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHkCFmRIZWMpTkwoYgSrcmLgycxPTU_VBAvyM3IkmuqkVJbp5qbn57EBpEZ7TvCztkz5XvxVYe6vyW7kS565brw0YeFhqlM2uz8nZ6rlWqehf_irVLp2YMgaeNak-wrsPXVpos_Vr2dyYjRtCvTcvZeB5um5ewqT1ig49MgeX86t8-pE_0VGeged5yN7lrmwKah8s-orKvq4-dV8kQZKBx-FuR8Hx0Pm3v2391GC-Z3FpiXPOHAaeiOTrh1eseOa30HlOx029jJ5Te2YIMfBwxeqXb53aZbfP_q7u7W3fnGPmWT5g4JHmfdi0yF_E49S3_Bb1w9vKt8tw8jLwhPef-u3NbN7q_3-qoPDF5u8Mf38LMvBc_dl0gNmb49WD1CS7b8IrP2ZN3nmIgUew2zfwqM4vleSvkjZe4Uah3cd86hl4qiWMExavZsmK22604Ldy4gSmGHFbBp6MJOngr9cZz7ft4ze6uHS_RusV-88MPA_m9mVVXF21OibD_dPNmn9dbEon1Rl4IsOX1n3WeBpZcaPhRaBRi_XLHV47GHhezPM-bOHzZ3b01gcP9WS9Vvpr1s5l4NlbofibJc5C4OaTE5c7_56UTb9uAXTvRc53_5b-2NN2_6TV3ah-Dt0jpbMcGXg0L4ctLp1QLqCf4j2zQerfK82CuzMZWIGRyyQGJFgYgQTPViDBsZABTIKiPQNIMLqD-KzPmRkYuB0YGNhCGECAT7i0KKcgsSgxV68otbggP684syxVUMOASCDM6uMY6RoEAIC1KheUAgAA?mimetype=image/png" },
  { id: 6, brand: 'Audi', name: 'A4', rent: { period: 'ao dia', price: 80 }, thumbnail: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHkCFmRIZWMpTkwoYgSrcmLgycxPTU_VBAvyM3IkmuqkVJbp5qbn57EBpEZ7TvCztkz5XvxVYe6vyW7kS565brw0YeFhqlM2uz8nZ6rlWqehf_irVLp2YMgaeNak-wrsPXVpos_Vr2dyYjRtCvTcvZeB5um5ewqT1ig49MgeX86t8-pE_0VGeged5yN7lrmwKah8s-orKvq4-dV8kQZKBx-FuR8Hx0Pm3v2391GC-Z3FpiXPOHAaeiOTrh1eseOa30HlOx029jJ5Te2YIMfBwxeqXb53aZbfP_q7u7W3fnGPmWT5g4JHmfdi0yF_E49S3_Bb1w9vKt8tw8jLwhPef-u3NbN7q_3-qoPDF5u8Mf38LMvBc_dl0gNmb49WD1CS7b8IrP2ZN3nmIgUew2zfwqM4vleSvkjZe4Uah3cd86hl4qiWMExavZsmK22604Ldy4gSmGHFbBp6MJOngr9cZz7ft4ze6uHS_RusV-88MPA_m9mVVXF21OibD_dPNmn9dbEon1Rl4IsOX1n3WeBpZcaPhRaBRi_XLHV47GHhezPM-bOHzZ3b01gcP9WS9Vvpr1s5l4NlbofibJc5C4OaTE5c7_56UTb9uAXTvRc53_5b-2NN2_6TV3ah-Dt0jpbMcGXg0L4ctLp1QLqCf4j2zQerfK82CuzMZWIGRyyQGJFgYgQTPViDBsZABTIKiPQNIMLqD-KzPmRkYuB0YGNhCGECAT7i0KKcgsSgxV68otbggP684syxVUMOASCDM6uMY6RoEAIC1KheUAgAA?mimetype=image/png" },
  { id: 7, brand: 'Audi', name: 'A4', rent: { period: 'ao dia', price: 80 }, thumbnail: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHkCFmRIZWMpTkwoYgSrcmLgycxPTU_VBAvyM3IkmuqkVJbp5qbn57EBpEZ7TvCztkz5XvxVYe6vyW7kS565brw0YeFhqlM2uz8nZ6rlWqehf_irVLp2YMgaeNak-wrsPXVpos_Vr2dyYjRtCvTcvZeB5um5ewqT1ig49MgeX86t8-pE_0VGeged5yN7lrmwKah8s-orKvq4-dV8kQZKBx-FuR8Hx0Pm3v2391GC-Z3FpiXPOHAaeiOTrh1eseOa30HlOx029jJ5Te2YIMfBwxeqXb53aZbfP_q7u7W3fnGPmWT5g4JHmfdi0yF_E49S3_Bb1w9vKt8tw8jLwhPef-u3NbN7q_3-qoPDF5u8Mf38LMvBc_dl0gNmb49WD1CS7b8IrP2ZN3nmIgUew2zfwqM4vleSvkjZe4Uah3cd86hl4qiWMExavZsmK22604Ldy4gSmGHFbBp6MJOngr9cZz7ft4ze6uHS_RusV-88MPA_m9mVVXF21OibD_dPNmn9dbEon1Rl4IsOX1n3WeBpZcaPhRaBRi_XLHV47GHhezPM-bOHzZ3b01gcP9WS9Vvpr1s5l4NlbofibJc5C4OaTE5c7_56UTb9uAXTvRc53_5b-2NN2_6TV3ah-Dt0jpbMcGXg0L4ctLp1QLqCf4j2zQerfK82CuzMZWIGRyyQGJFgYgQTPViDBsZABTIKiPQNIMLqD-KzPmRkYuB0YGNhCGECAT7i0KKcgsSgxV68otbggP684syxVUMOASCDM6uMY6RoEAIC1KheUAgAA?mimetype=image/png" },
]

export function Home() {
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <Header />

      <FlatList 
        data={data}
        renderItem={({ item }) => <Car {...item} />}
        style={{ 
          margin: 16,
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
