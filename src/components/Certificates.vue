<template>
  <div>
    <h2>Lista de certificados</h2>
    <ul>
      <li v-for="(cert, index) in certificates" :key="index">{{cert.subject.attributes[cert.subject.attributes.length-1].value}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  beforeMount() {
    ca({
      store: ['my'],  
      format: ca.der2.x509,
      ondata: crt => this.certificates.push(crt)
    });
    console.log(this.certificates);
  },

  data() {
    return {
      certificates: []
    };
  }
};
</script>