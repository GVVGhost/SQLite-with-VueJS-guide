<template>
    <div>
        <b-row>
            <div class="col-6">
                <b-card>
                    <b-row class="my-3" align-v="center">
                        <b-col sm="2"><label>Поле name:</label></b-col>
                        <b-col sm="10">
                            <b-form-input v-model="valName" type="text"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-3" align-v="center">
                        <b-col sm="2"><label>Поле url:</label></b-col>
                        <b-col sm="10">
                            <b-form-input v-model="valUrl" type="url"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row align-v="center">
                        <b-col sm="6">
                            <b-button class="container-fluid"
                                      @click="insertToDB"
                                      :disabled="btnDisabled"
                                      variant="outline-primary">
                                {{ dbRewriteEnable ? "Перезаписати значення із БД" : "Записати в БД" }}
                            </b-button>
                        </b-col>
                        <b-col sm="6">
                            <b-button class="container-fluid"
                                      :pressed="dbRewriteEnable"
                                      @click="dbRewriteEnable = !dbRewriteEnable"
                                      variant="outline-warning">
                                {{ dbRewriteEnable ? "Режим перезапису" : "Режим запису" }}
                            </b-button>
                        </b-col>
                    </b-row>
                    <b-row class="my-3" align-v="center">
                        <b-col sm="4">
                            <b-button class="container-fluid"
                                      :disabled="(this.valId.trim() && dbRewriteEnable)"
                                      @click="deleteFromDB" variant="outline-danger">
                                {{ dbRewriteEnable ? "Id для перезапису:" : "Видалити id:" }}
                            </b-button>
                        </b-col>
                        <b-col sm="8">
                            <b-form-input v-model="valId" type="text"></b-form-input>
                        </b-col>
                    </b-row>
                </b-card>
            </div>
            <div class="col-6">
                <b-card>
                    <p>Вміст бази даних (імітація)</p>
                    <b-table class="text-decoration-none"
                             sticky-header
                             :items="tableList"
                             :fields="tableFields"
                             @row-clicked="onRowSelected"></b-table>
                    <div v-if="currImageUrl.trim()" class="row-cols-sm-1">
                        <b-img :src='currImageUrl' sizes="sm" alt="image"></b-img>
                    </div>
                </b-card>
            </div>
        </b-row>
    </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';
import {isValidUrl} from '@/utils/UrlValidator'
import {tableContent} from '@/database/mockDB'

export default {
    name: 'SimpleComponent',
    data() {
        return {
            dbRewriteEnable: false,
            tableList: tableContent,
            tableFields: ['id', 'name'],
            valId: '',
            valName: '',
            valUrl: '',
            currImageUrl: '',
        }
    },
    methods: {
        insertToDB() {
            const index = this.tableList.findIndex(item => item.id === this.valId);
            if (this.dbRewriteEnable && index >= 0) {
                const temp = this.tableList[index]
                temp.name = this.valName
                temp.url = this.valUrl
                this.tableList[index] = temp;
            } else {
                this.tableList.push({
                    id: uuidv4(),
                    name: this.valName,
                    url: this.valUrl
                });
            }
        },
        deleteFromDB() {
            this.tableList = this.tableList.filter((el) => this.valId !== el.id)
            this.clearFields()
        },
        onRowSelected(item) {
            if (item.id === this.valId && item.name === this.valName && item.url === this.valUrl) {
                this.clearFields()
            } else {
                console.log(item)
                this.valId = item.id
                this.valName = item.name
                this.valUrl = item.url
                this.currImageUrl = isValidUrl(item.url) ? item.url : ''
            }
        },
        clearFields() {
            this.valId = ''
            this.valName = ''
            this.valUrl = ''
            this.currImageUrl = ''
        }
    },
    computed: {
        btnDisabled() {
            return !(this.valName.trim() && this.valUrl.trim()) && (!this.valName.trim())
        }
    }
}
</script>

<style scoped>
p {
    font-size: large;
}
</style>
