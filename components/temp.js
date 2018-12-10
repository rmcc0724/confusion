				<Card>
				<View>
				<Text style={styles.head}>Corporte Leadership</Text>
				</View>
				<FlatList 
				data={this.state.leaders}
				renderItem={renderLeaderItem}
				keyExtractor={leader => leader.id.toString()}
				/>
				</Card>